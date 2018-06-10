
p5.disableFriendlyErrors = true;

// colors
var ORANGE_LIGHT = "#F38630";
var ORANGE_DARK = "#F96800";
var BLUE_LIGHT = "#00A4CC";
var BLUE_DARK = "#007C9E";
var PINK_DARK = "#F000D5";

// map information
var map_zoom = 1;
var map_width = 1024;//window.innerWidth + 100;
var map_height = 512;
var map_center = { lat: 0, lon: 0};

// Victoria, Canada location
//48.4284° N, 123.3656° W
var victoria = { lon: -123.3656, lat: 48.4284 };
var victoria_pos, center_pos;

// USGS feed indices
var usgs_lat = 1;
var usgs_lon = 2;
var usgs_mag = 4;

var map_img;
var earthquake, earthquake_pos, earthquake_feed, min_mag, max_mag, mag, d;
var earthquakes = [];

function preload() {
    let map_url = 'https://api.mapbox.com/styles/v1/mapbox/dark-v9/static/' + map_center.lat + ',' + map_center.lon + ',' + map_zoom + ',0,0/' + map_width + 'x' + map_height + '?access_token=' + mapbox_token;
    map_img = loadImage(map_url);
    earthquake_feed = loadStrings('https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/1.0_week.csv')
}

function setup() {
    createCanvas(map_width, map_height);
    translate(width / 2, height / 2);
    imageMode(CENTER);
    image(map_img, 0, 0);
    noStroke()

    

    

    // calculate location of victoria on map
    center_pos = {x: webMercatorX(map_center.lon), y: webMercatorY(map_center.lat)};
    victoria_pos = {x: webMercatorX(victoria.lon), y: webMercatorY(victoria.lat)};
    // console.log(victoria_pos);
    victoria_pos.x -= center_pos.x;
    victoria_pos.y -= center_pos.y;
    // console.log(victoria_pos);
    
    fill(PINK_DARK+ "88");
    var count = 0;
    max_mag = sqrt(pow(10, 10));
    for (let i = 0; i < earthquake_feed.length; i++) {
        let earthquake = earthquake_feed[i].split(',');
        let earthquake_pos = {x: webMercatorX(parseInt(earthquake[usgs_lon])), y: webMercatorY(parseInt(earthquake[usgs_lat]))};
        earthquake_pos.x -= center_pos.x;
        earthquake_pos.y -= center_pos.y;

        mag = earthquake[usgs_mag];
        
        // if (mag > 3) {
            count++;
            // console.log("MAG: " + mag);
            // mag = pow(10, mag);
            // mag = sqrt(mag);
            // console.log("BIGMAG: " + mag);
            

            d = map(mag, 1, 10, 3, 40);

            console.log("D: " + d);

            ellipse(earthquake_pos.x, earthquake_pos.y, d);
        // }
    }
    // center_pos.x -= center_pos.x;
    // center_pos.y -= center_pos.y;
    console.log("COUNT: " + count);
    console.log(max_mag);
    // draw dot at victoria location
    fill(BLUE_DARK + "88");
    ellipse(victoria_pos.x, victoria_pos.y, 10, 10);
    // console.log("VICTORIA DEG: "+ victoria.lat + ", " + victoria.lon);
    // console.log("VICTORIA COORDS: "+ victoria_pos.x + ", " + victoria_pos.y);
    // fill(PINK_DARK+ "88");
    // ellipse(center_pos.x, center_pos.y, 10, 10);
}

function draw() {

}

function webMercatorX(lon_deg) {
    let lon_rad = radians(lon_deg);
    let a = (256 / PI) * pow(2, map_zoom);
    let b = lon_rad + PI;
    return a * b;
}

function webMercatorY(lat_deg) {
    let lat_rad = radians(lat_deg);
    let a = (256 / PI) * pow(2, map_zoom);
    let b = tan(PI / 4 + lat_rad / 2);
    let c = PI - log(b);
    return a * c;
}