import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
      <div className="footer">
        <nav className="nav">
          <a className="link" href="https://github.com/Iguan19" title="GitHub">Created by Francisco Egea</a>
        </nav>
      </div>
  );
}

export default Footer;

/** /// TACHYONS ///
	.tracked	{ letter-spacing:  .1em; }
	.normal	 { font-weight: normal; }
	.b      { font-weight: bold; }
	.fw1    { font-weight: 100; }
	.tr  { text-align: right; }
	.bg-black-90 { background-color: var(--black-90); }
	.f6 { font-size: .875rem; }
	.mr1 {  margin-right: var(--spacing-extra-small); }
	.ma3  {  margin: var(--spacing-medium); }

	Padding
		 Base:
     p = padding
     m = margin
  Modifiers:
    a = all
    h = horizontal
    v = vertical
    t = top
    r = right
    b = bottom
    l = left
	Media Query Extensions:
    -ns = not-small
    -m  = medium
    -l  = large
	
	.dim:hover
	.dim:focus
	.dim:active
  HOVER EFFECTS
  - Dim
  - Glow
  - Hide Child
  - Underline text
  - Grow
  - Pointer
  - Shadow

	.dib
	Base:
  	d = display
  Modifiers:
		n     = none
		b     = block
	  ib    = inline-block
	  it    = inline-table
	  t     = table
	  tc    = table-cell
	  t-row          = table-row
	  t-columm       = table-column
	  t-column-group = table-column-group

	
**/