// Menu
export interface Menu {
  path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
  megaMenuType?: string; // small, medium, large
  image?: string;
  children?: Menu[];
}

export const MENUITEMS: Menu[] = [
	// {
	// 	title: 'home', type: 'sub', children: [
	//       { path: 'home/one', title: 'Fashion-01', type: 'extTabLink' },          
	//       { path: 'home/two', title: 'Fashion-02', type: 'extTabLink'},         
	//       { path: 'home/three', title: 'Fashion-03', type: 'extTabLink' },         
	//       { path: 'home/four', title: 'vegetable', type: 'extTabLink' },        
	//       { path: 'home/five', title: 'watch', type: 'extTabLink' },        
	//       { path: 'home/six', title: 'furniture', type: 'extTabLink' },        
	//       { path: 'home/seven', title: 'flower', type: 'extTabLink' },    
	//       { path: 'home/eight', title: 'beauty', type: 'extTabLink' },   
	//       { path: 'home/nine', title: 'electronics', type: 'extTabLink' },   
	//       { path: 'home/ten', title: 'pets', type: 'extTabLink' },   
	//       { path: 'home/eleven', title: 'metro', type: 'extTabLink' },   
	//       { path: 'home/twelve', title: 'gym', type: 'extTabLink' },   
	//       { path: 'home/thirteen', title: 'tools', type: 'extTabLink' },   
	//       { path: 'home/fourteen', title: 'marijuana', type: 'extTabLink' }  
	//     ]
	// },
	// {
	// 	title: 'Shop by industry', type: 'sub', megaMenu: true, megaMenuType: 'small', children: [
	//       { path: '/blog/left-sidebar', title: 'blog-left-sidebar', image: 'assets/images/feature/blog-page.jpg', type: 'link' },
	//       { path: '/blog/right-sidebar', title: 'blog-right-sidebar', image: 'assets/images/feature/blog(right-sidebar).jpg', type: 'link' },
	//       { path: '/blog/details', title: 'blog-detail',  image: 'assets/images/feature/blog-detail.jpg', type: 'link' },
	//       { path: '/home/left-sidebar/collection/all', title: 'category-left-sidebar', image: 'assets/images/feature/category-page.jpg', type: 'link' },
	//       { path: '/home/right-sidebar/collection/all', title: 'category-right-sidebar', image: 'assets/images/feature/category-page(right).jpg', type: 'link' },
	//       { path: '/home/no-sidebar/collection/all', title: 'category-no-sidebar', image: 'assets/images/feature/category-page(no-sidebar).jpg', type: 'link' }
	//     ]
	// },
	// {
	// 	title: 'shop by industry', type: 'sub', megaMenu: true, megaMenuType: 'large', children: [
	//       { 
	//       	title: '',  type: 'link', children: [
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Abrasives', image: '../../../../../assets/images/tools/product/2.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Food Processing Industry', image: '../../../../../assets/images/tools/product/1.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Janitorial and Cleaning', image: '../../../../../assets/images/tools/product/2.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Measuring & Inspecting', image: '../../../../../assets/images/tools/product/8.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Packaging Machines', image: '../../../../../assets/images/tools/category/2.jpg',  type: 'link' },
	// 					{ path: '/home/left-sidebar/collection/all', title: 'Raw Materials', image: '../../../../../assets/images/tools/category/3.jpg',  type: 'link' },
	// 					{ path: '/home/left-sidebar/collection/all', title: 'Tools', image: '../../../../../assets/images/tools/category/4.jpg',  type: 'link' }
	//       	]
	//       },
	//       { 
	//       	title: '',  type: 'link', children: [
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Advertisoing Signage Industry', image: '../../../../../assets/images/tools/product/3.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'HVAC & Refrigeration', image: '../../../../../assets/images/tools/product/12.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Lab Equipment', image: '../../../../../assets/images/tools/product/2.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Metal Machine Tool Industry', image: '../../../../../assets/images/tools/category/1.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Pharmaceutical Equipment', image: '../../../../../assets/images/tools/category/2.jpg',  type: 'link' },
	// 					{ path: '/home/left-sidebar/collection/all', title: 'Restoration and Cleaning Industry', image: '../../../../../assets/images/tools/category/3.jpg',  type: 'link' },
	// 					{ path: '/home/left-sidebar/collection/all', title: 'Welding & Soldering Equipment', image: '../../../../../assets/images/tools/category/4.jpg',  type: 'link' }
	//       	]
	//       },
	//       { 
	//       	title: '',  type: 'link', children: [
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Automotive', image: '../../../../../assets/images/tools/product/1.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Hydraulics', image: '../../../../../assets/images/tools/product/10.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Lighting & Electrical', image: '../../../../../assets/images/tools/product/9.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Metrology', image: '../../../../../assets/images/tools/product/8.jpg', type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Plastic machinery Industry', image: '../../../../../assets/images/tools/category/2.jpg',  type: 'link' },
	// 					{ path: '/home/left-sidebar/collection/all', title: 'Rubber Machinery', image: '../../../../../assets/images/tools/category/2.jpg',  type: 'link' },
	// 					{ path: '/home/left-sidebar/collection/all', title: 'Woodworking Industry',image: '../../../../../assets/images/tools/category/2.jpg',   type: 'link' }
	//       	]
	//       },
	//       { 
	//       	title: '',  type: 'link', children: [
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Construction Industry', image: '../../../../../assets/images/tools/product/10.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Hydroelectriuc Power Industry', image: '../../../../../assets/images/tools/product/11.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Linear Motion', image: '../../../../../assets/images/tools/category/1.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Components', image: '../../../../../assets/images/tools/category/3.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Oilfield Equipment', image: '../../../../../assets/images/tools/category/4.jpg',  type: 'link' },
	// 					{ path: '/home/left-sidebar/collection/all', title: 'Pneumatics', image: '../../../../../assets/images/tools/category/5.jpg',  type: 'link' },
	// 					{ path: '/home/left-sidebar/collection/all', title: 'Safety', image: '../../../../../assets/images/tools/product/7.jpg',  type: 'link' }
	//       	]
	//       },
	//       { 
	//       	title: '',  type: 'link', children: [
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Cutting Machines',  image: '../../../../../assets/images/tools/product/5.jpg', type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Industrial Paint Application', image: '../../../../../assets/images/tools/product/6.jpg',   type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Material Handling & Storage', image: '../../../../../assets/images/tools/product/7.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Outdoor Equipment', image: '../../../../../assets/images/tools/product/9.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'Power Transmission', image: '../../../../../assets/images/tools/product/8.jpg',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'School & Office Supplies', image: '../../../../../assets/images/tools/category/2.jpg',  type: 'link' }
	//       	]
	//       },
	//     ]
	// },
	{
		title: 'My Account', type: 'sub', children: [
				{ path: '/home/left-sidebar/product/1', title: 'wishlist',  type: 'link' },
				{ path: '/home/left-sidebar/product/1', title: 'favorites',  type: 'link' },
				{ path: '/home/left-sidebar/product/1', title: 'order history',  type: 'link' },
				{ path: '/home/left-sidebar/product/1', title: 'settings',  type: 'link' },
	      // { path: '/home/right-sidebar/product/1', title: 'right-sidebar',  type: 'link' },
	      // { path: '/home/no-sidebar/product/1', title: 'no-sidebar',   type: 'link' },
	      // { path: '/home/col-left/product/1', title: '3-asdfl-left',  type: 'link' },
	      // { path: '/home/col-right/product/1', title: '3-col-thumbnail-right', type: 'link' },
	      // { path: '/home/column/product/1', title: 'thumbnail-below', type: 'link' },
	      // { path: '/home/accordian/product/1', title: 'accordian-details', type: 'link' },
	      // { path: '/home/left-image/product/1', title: 'thumbnail-left', type: 'link' },
	      // { path: '/home/right-image/product/1', title: 'thumbnail-right', type: 'link' },
	      // { path: '/home/vertical/product/1', title: 'vertical-tab', type: 'link' }
	    ]
	},
	// {
	// 	title: 'After-Sales', type: 'link', path: '/home/left-sidebar/product/1'
	// }
	// {
	// 	title: 'After-Sales', type: 'sub', children: [
	//       { path: '/pages/about-us', title: 'about-us', type: 'link' },          
	//       { path: '/pages/lookbook', title: 'lookbook', type: 'link' },         
	//       { path: '/pages/typography', title: 'Typography', type: 'link' }, 
	//       { 
	//       	title: 'Portfolio',  type: 'sub', children: [
	// 	      	{ path: '/pages/grid/two/column', title: 'Portfolio-2-Grid',  type: 'link' },
	// 	      	{ path: '/pages/grid/three/column', title: 'Portfolio-3-Grid',  type: 'link' },
	// 	      	{ path: '/pages/grid/four/column', title: 'Portfolio-4-Grid',  type: 'link' },
	// 	      	{ path: '/pages/grid/two/masonary', title: 'Masonary-2-Grid',  type: 'link' },
	// 	      	{ path: '/pages/grid/three/masonary', title: 'Masonary-3-Grid',  type: 'link' },
	// 	      	{ path: '/pages/grid/four/masonary', title: 'Masonary-4-Grid',  type: 'link' },
	// 	      	{ path: '/pages/fullwidth/masonary', title: 'Masonary-Fullwidth',  type: 'link' }
	//       	]
	//       },         
	//       { path: '/pages/dashboard', title: 'dashboard', type: 'link' },  
	//       { path: '/pages/cart', title: 'cart', type: 'link' },  
	//       { path: '/pages/wishlist', title: 'wishlist', type: 'link' },    
	//       { path: '/pages/compare', title: 'compare', type: 'link' },  
	//       { path: '/pages/checkout', title: 'checkout', type: 'link' },  
	//       { path: '/pages/login', title: 'login', type: 'link' },        
	//       { path: '/pages/register', title: 'register', type: 'link' },        
	//       { path: '/pages/forgetpassword', title: 'forget-password', type: 'link' },  
	//       { path: '/pages/search', title: 'search', type: 'link' },        
	//       { path: '/pages/collection', title: 'collection', type: 'link' },  
	//       { path: '/pages/order-success', title: 'order-success', type: 'link' },  
	//       { path: '/pages/contact', title: 'contact', type: 'link' },  
	//       { path: '/pages/faq', title: 'FAQ', type: 'link' },  
	//       { path: '/pages/404', title: '404', type: 'link'}        
	//     ]
	// },
]