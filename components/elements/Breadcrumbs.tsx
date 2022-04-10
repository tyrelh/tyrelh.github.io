import { SwapRightOutlined } from '@ant-design/icons';
import Link from 'next/link';
import Anchor from './Anchor';

export default function Breadcrumbs(props) {

  return (
    <div id="sticky-header" className="sticky-header-hidden">
      <Anchor href="/">Home</Anchor> <SwapRightOutlined /> blog <SwapRightOutlined /> Article Title
    </div>)
}