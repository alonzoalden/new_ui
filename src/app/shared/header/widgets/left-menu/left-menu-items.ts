// Menu
export interface Menu {
  path?: string;
  title?: string;
  type?: string;
  megaMenu?: boolean;
	children?: Menu[];
	image?: string;
}

export const MENUITEMS: Menu[] = [
	{
		title: 'Shop by Industry', type: 'sub', megaMenu: true, children: [
	      { 
	      	title: '',  type: 'link', children: [
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/1.jpg', title: 'Abrasives',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/3.jpg', title: 'Food Processing Industry',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/2.jpg', title: 'Janitorial and Cleaning',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/4.jpg', title: 'Measuring & Inspecting',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/5.jpg', title: 'Packaging Machines',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/6.jpg', title: 'Raw Materials',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/7.jpg', title: 'Tools',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/8.jpg', title: 'Advertisoing Signage Industry',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/13.jpg', title: 'HVAC & Refrigeration',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/1.jpg', title: 'Lab Equipment',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/1.jpg', title: 'Metal Machine Tool Industry',  type: 'link' },
		      	
	      	]
	      },
	      // { 
	      // 	title: '',  type: 'link', children: [
		    //   	{ path: '/home/left-sidebar/collection/all', title: 'Advertisoing Signage Industry',  type: 'link' },
		    //   	{ path: '/home/left-sidebar/collection/all', title: 'HVAC & Refrigeration',  type: 'link' },
		    //   	{ path: '/home/left-sidebar/collection/all', title: 'Lab Equipment',  type: 'link' },
		    //   	{ path: '/home/left-sidebar/collection/all', title: 'Metal Machine Tool Industry',  type: 'link' },
		    //   	{ path: '/home/left-sidebar/collection/all', title: 'Pharmaceutical Equipment',  type: 'link' },
				// 		{ path: '/home/left-sidebar/collection/all', title: 'Restoration and Cleaning Industry',  type: 'link' },
				// 	]
				// },
				{
					title: '',  type: 'link', children: [
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/11.jpg', title: 'Hydraulics',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/12.jpg', title: 'Lighting & Electrical',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/10.jpg', title: 'Metrology',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/9.jpg', title: 'Plastic machinery Industry',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/8.jpg', title: 'Rubber Machinery',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/7.jpg', title: 'Woodworking Industry',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/1.jpg', title: 'Construction Industry',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/2.jpg', title: 'Hydroelectriuc Power Industry',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/3.jpg', title: 'Linear Motion',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/4.jpg', title: 'Components',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/5.jpg', title: 'Oilfield Equipment',  type: 'link' },
						
	      	]
				},
				// { 
	      // 	title: '',  type: 'link', children: [
		    //   	{ path: '/home/left-sidebar/collection/all', title: 'Construction Industry',  type: 'link' },
		    //   	{ path: '/home/left-sidebar/collection/all', title: 'Hydroelectriuc Power Industry',  type: 'link' },
		    //   	{ path: '/home/left-sidebar/collection/all', title: 'Linear Motion',  type: 'link' },
		    //   	{ path: '/home/left-sidebar/collection/all', title: 'Components',  type: 'link' },
		    //   	{ path: '/home/left-sidebar/collection/all', title: 'Oilfield Equipment',  type: 'link' },
				// 		{ path: '/home/left-sidebar/collection/all', title: 'Pneumatics',  type: 'link' },
				// 		{ path: '/home/left-sidebar/collection/all', title: 'Safety',  type: 'link' }
	      // 	]
				// },
				{ 
	      	title: '',  type: 'link', children: [
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/1.jpg', title: 'Safety',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/2.jpg', title: 'Pneumatics',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/3.jpg', title: 'Safety',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/4.jpg', title: 'Cutting Machines',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/5.jpg', title: 'Industrial Paint Application',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/6.jpg', title: 'Material Handling & Storage',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/7.jpg', title: 'Outdoor Equipment',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/8.jpg', title: 'Power Transmission',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/9.jpg', title: 'School & Office Supplies',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/10.jpg', title: 'Pharmaceutical Equipment',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/11.jpg', title: 'Restoration and Cleaning Industry',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/12.jpg', title: 'Automotive',  type: 'link' },
	      	]
	      },
	    ]
	},
	{
		title: 'Best Selling Industries', type: 'sub', megaMenu: true, children: [
	      { 
	      	title: '',  type: 'link', children: [
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/1.jpg', title: 'Plastic Machine',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/2.jpg', title: 'Metal Machine',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/3.jpg', title: 'Food Processing',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/category/4.jpg', title: 'Woodworking',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/10.jpg', title: 'HVAC / Refrigeration',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/9.jpg', title: 'Material Handling',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/8.jpg', title: 'Lighting',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/7.jpg', title: 'Construction',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/6.jpg', title: 'Pneumatics',  type: 'link' },
		      	{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/1.jpg', title: 'Automotive',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/2.jpg', title: 'Lab Equipment',  type: 'link' },
						{ path: '/home/left-sidebar/collection/all', image: '../../../../../assets/images/tools/product/3.jpg', title: 'Tools',  type: 'link' },
		      	
	      	]
	      },
	    ]
	},
	// {
	// 	title: 'Best Selling Industries', type: 'sub', children: [
	// 	  { path: '/home/left-sidebar/collection/all', title: 'shopper bags', type: 'link' },
	// 	  { path: '/home/left-sidebar/collection/all', title: 'laptop bags', type: 'link' },
	// 	  { path: '/home/left-sidebar/collection/all', title: 'clutches', type: 'link' },
	// 	  { 
	// 	  	path: '/home/left-sidebar/collection/all', title: 'purses', type: 'link', children: [
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'purses',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'wallets',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'leathers',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'satchels',  type: 'link' }
	//       	]
	// 	  },
	//     ]
	// },
	// {
	// 	title: 'footwear', type: 'sub', children: [
	// 	  { path: '/home/left-sidebar/collection/all', title: 'sport shoes', type: 'link' },
	// 	  { path: '/home/left-sidebar/collection/all', title: 'formal shoes', type: 'link' },
	// 	  { path: '/home/left-sidebar/collection/all', title: 'casual shoes', type: 'link' }
	// 	]
	// },
	// {
	// 	path: '/home/left-sidebar/collection/all', title: 'watches', type: 'link'
	// },
	// {
	// 	title: 'Accessories', type: 'sub', children: [
	// 	  { path: '/home/left-sidebar/collection/all', title: 'fashion jewellery', type: 'link' },
	// 	  { path: '/home/left-sidebar/collection/all', title: 'caps and hats', type: 'link' },
	// 	  { path: '/home/left-sidebar/collection/all', title: 'precious jewellery', type: 'link' },
	// 	  { 
	// 	  	path: '/home/left-sidebar/collection/all', title: 'more..', type: 'link', children: [
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'necklaces',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'earrings',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'rings & wrist wear',  type: 'link' },
	// 	      	{ 
	// 	      		path: '/home/left-sidebar/collection/all', title: 'more...',  type: 'link', children: [
	// 			      	{ path: '/home/left-sidebar/collection/all', title: 'ties',  type: 'link' },
	// 			      	{ path: '/home/left-sidebar/collection/all', title: 'cufflinks',  type: 'link' },
	// 			      	{ path: '/home/left-sidebar/collection/all', title: 'pockets squares',  type: 'link' },
	// 			      	{ path: '/home/left-sidebar/collection/all', title: 'helmets',  type: 'link' },
	// 			      	{ path: '/home/left-sidebar/collection/all', title: 'scarves',  type: 'link' },
	// 			      	{ 
	// 			      		path: '/home/left-sidebar/collection/all', title: 'more...',  type: 'link', children: [
	// 					      	{ path: '/home/left-sidebar/collection/all', title: 'accessory gift sets',  type: 'link' },
	// 					      	{ path: '/home/left-sidebar/collection/all', title: 'travel accessories',  type: 'link' },
	// 					      	{ path: '/home/left-sidebar/collection/all', title: 'phone cases',  type: 'link' }
	// 			      		]
	// 			      	},
	// 			    ]
	// 	      	}
	//       	]
	// 	  },
	//     ]
	// },
	// {
	// 	path: '/home/left-sidebar/collection/all', title: 'house of design', type: 'link'
	// },
	// {
	// 	title: 'beauty & personal care', type: 'sub', children: [
	// 	  { path: '/home/left-sidebar/collection/all', title: 'makeup', type: 'link' },
	// 	  { path: '/home/left-sidebar/collection/all', title: 'skincare', type: 'link' },
	// 	  { path: '/home/left-sidebar/collection/all', title: 'premium beaty', type: 'link' },
	// 	  { 
	// 	  	path: '/home/left-sidebar/collection/all', title: 'more..', type: 'link', children: [
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'fragrances',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'luxury beauty',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'hair care',  type: 'link' },
	// 	      	{ path: '/home/left-sidebar/collection/all', title: 'tools & brushes',  type: 'link' }
	//       	]
	// 	  },
	//     ]
	// },
	// {
	// 	path: '/home/left-sidebar/collection/all', title: 'home & decor', type: 'link'
	// },
	// {
	// 	path: '/home/left-sidebar/collection/all', title: 'kitchen', type: 'link'
	// },
]