import React from 'react';

const Footer = () => {
  return (
      <div className="bg-black-90 pv3 ph3 pv4-ns ph4-m ph5-l bottom-0">
        <nav className="link tr f7 fw3 tracked">
          <a className="b dim white dib mr3" href="https://github.com/Iguan19" title="Home">Created by Francisco Egea</a>
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