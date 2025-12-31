import React from 'react';
import Wrapper from '../_assets/wrapper/Navbar_00';
//import { Link } from 'react-router-dom';
import Link from 'next/link';

const Navbar_00 = () => {
  return (
    <Wrapper>
      <header className='header'>
        <div
          className='header-row container'
          role='navigation'
          aria-label='Main'
        >
          <div className='header-left'>
            <div className='logo'>
              <h1>TkuDemo</h1>
            </div>
          </div>
          <div className='header-right'>
            <ul className='main-menu'>
              <li className='menu-item'>
                <Link href='/' className='active'>
                  Home
                </Link>
              </li>
              <li className='menu-item dropdown'>
                <Link href='#'>Demo +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='/booklist_xx'>W2-BookList_00</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/static_xx'>W3-BlogStatic_00</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/localjson_xx'>W3-BlogLocalJson_00</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/node_xx'>W4-BlogNode_00</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>W5-BlogSupa_00</Link>
                    </li>
                      <li className='menu-item'>
                      <Link href='/demo/blog_00/localjson2_00'>W7-LocalJsonPage_00</Link>
                    </li>
                      <li className='menu-item'>
                      <Link href='/demo/shop_00/node'>W11-ShopNode_00</Link>
                    </li>
                      <li className='menu-item'>
                      <Link href='/demo/shop_00/supa'>W12-ShopSupa</Link>
                    </li>
                      <li className='menu-item'>
                      <Link href='/demo/blog_00/localjson2_00'>W13-BlogLocalJson2</Link>
                    </li>
                      <li className='menu-item'>
                      <Link href='/demo/blog_00/localjson2_context_00'>W13-BlogLJ2Context_00</Link>
                    </li>
                      <li className='menu-item'>
                      <Link href='/demo/grocery_00'>W14-Grocery_00</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <Link href='#'>Tuhrefrials +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='/tuhrefrials/t11_xx'>
                        T11_ErrorExamplePage_00
                      </Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/tuhrefrials/t12_xx'>
                        T12_UseStateBasicsPage_00
                      </Link>
                    </li>
                    <li className='menu-item'>
                        <Link href='/tutorials/context/1_propdrilling_00'>
                        W13_PropDrillimg_00
                      </Link>
                    </li>
                      <li className='menu-item'>
                        <Link href='/tutorials/context/2_context_people_00'>
                        W13_context_people_00
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item dropdown'>
                <Link href='#'>Quiz1 +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='/quiz1/static_xx'>hrefurStaticPage_00</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/quiz1/static2_xx'>hrefurStaticPage2_00</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/quiz1/static3_xx'>hrefurStaticPage3_00</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/quiz1/node_xx'>hrefurNodePage_00</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item dropdown'>
                <Link href='#'>Midterm +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='/exams/midterm/p1_00'>P1_StaticPage_00</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/exams/midterm/p2_00'>P2_StaticPage2_00</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/exams/midterm/p4_xx'>P4_NodePage_00</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/exams/midterm/p7_xx'>P7_SupaPage_00</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item'>
                <Link href='#'>Contact</Link>
              </li>
            </ul>
            <Link
              href='#'
              id='hamburger-icon'
              className='mobile-hrefggler'
              aria-label='Mobile Menu'
            >
              <i className='fas fa-bars'></i>
            </Link>
          </div>
          <div id='mobile-menu' className='mobile-menu hidden slideInDown'>
            <ul>
              <li className='menu-item'>
                <Link href='#' className='active'>
                  Home
                </Link>
              </li>

              {/* <li className='menu-item mega-menu'>
                <Link href='#'>Mega menu +</Link>
                <div className='mega-menu-wrapper'>
                  <div className='mega-menu-col'>
                    <h5>Menu block 1</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 2</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 3</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                  <div className='mega-menu-col'>
                    <h5>Menu block 4</h5>
                    <ul className='mega-sub-menu'>
                      <li>
                        <Link href='#'>Menu block item 1</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 2</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 3</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 4</Link>
                      </li>
                      <li>
                        <Link href='#'>Menu block item 5</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </li> */}

              <li className='menu-item dropdown'>
                <Link href='#'>Services +</Link>
                <div className='sub-menu-wrapper'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='#'>Service 1</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>Service 2</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>Service 3</Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='#'>Service 4</Link>
                    </li>
                  </ul>
                </div>
              </li>

              <li className='menu-item dropdown'>
                <Link href='#'>Tuhrefrials +</Link>
                <div className='sub-menu-wrapper slideInUp'>
                  <ul className='sub-menu'>
                    <li className='menu-item'>
                      <Link href='/tuhrefrials/t11_xx'>
                        T11_ErrorExamplePage_00
                      </Link>
                    </li>
                    <li className='menu-item'>
                      <Link href='/tuhrefrials/t12_xx'>
                        T12_UseStateBasicsPage_00
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className='menu-item'>
                <Link href='#'>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </Wrapper>
  );
};

export default Navbar_00;
