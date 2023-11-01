const products = [
    {
        image: 'https://m.media-amazon.com/images/I/61QecQhdXIL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 1',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 1999,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/713UmakQhoL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 2',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 3999,
        category:'shoes'
        
    },
    {
        image: 'https://m.media-amazon.com/images/I/71-Gr1ulJhL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 3',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 1799,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/61+hrj2FI5L._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 4',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 999,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/71YLPcl9Z-L._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 5',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 499,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/51cixHJnEAL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 6',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 3749,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/71n9xHYpaHL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 7',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 4899,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/61tdxAZiO2L._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 8',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 1299,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/71nbgibXEIL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 9',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 2679,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/81kcEIOUJsL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 10',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 2579,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/81paxG9XinL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 11',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 3799,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/91ekFTSelNL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 12',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 9949,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/814i3e4eASL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 13',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 4629,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/81Qi5P+GYbL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 14',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 1269,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/81LVUQlGx5L._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 15',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 1659,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/81Qi5P+GYbL._AC_UL480_QL65_.jpg',
        title: 'Product 16',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 1789,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/71Pz9zbWPsL._AC_UL480_QL65_.jpg',
        title: 'Product 17',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 1099,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/71bM-c5rOpL._AC_UL480_QL65_.jpg',
        title: 'Product 18',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 2199,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/61S5OQzGeyL._AC_UL480_QL65_.jpg',
        title: 'Product 19',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 6599,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/71y3+vwVBcL._AC_UL480_QL65_.jpg',
        title: 'Product 20',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 2499,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/61lfgSuma9L._AC_UL480_QL65_.jpg',
        title: 'Product 21',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 2379,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/71g9y70lX2L._AC_UL480_QL65_.jpg',
        title: 'Product 22',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 899,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/61UUpyG3-VL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 23',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 499,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/71EDI+Nm7LL._AC_UL480_QL65_.jpg',
        title: 'Product 24',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 199,
        category:'shoes'
    },

    {
        image: 'https://m.media-amazon.com/images/I/61QecQhdXIL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 25',
        description: 'Perfect Blend of Comfort and Style – Our Premium Shoes!',
        price: 5999,
        category:'shoes'
    },
    {
        image: 'https://m.media-amazon.com/images/I/61JEbzmJi4L._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 1',
        description: 'Ultimate Grooming Companion - Our Precision Trimmer!',
        price: 1299,
        category:'trimmer'
    },
    {
        image: 'https://m.media-amazon.com/images/I/61qtxFjZjzL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 2',
        description: 'Ultimate Grooming Companion - Our Precision Trimmer!',
        price: 669,
        category:'trimmer'
    },
    {
        image: 'https://m.media-amazon.com/images/I/61n4jyp69IL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 3',
        description: 'Ultimate Grooming Companion - Our Precision Trimmer!',
        price: 789,
        category:'trimmer'
    },

    {
        image: 'https://m.media-amazon.com/images/I/71LrDf2wj7L._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 4',
        description: 'Ultimate Grooming Companion - Our Precision Trimmer!',
        price: 899,
        category:'trimmer'
    },
    {
        image: 'https://m.media-amazon.com/images/I/81tioCUVf4L._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Product 1',
        description: 'Perfect Partner for Your Digital World - Our High-Performance Computer Mouse!',
        price: 199,
        category:'electronics'
    },
    {
        image: 'https://m.media-amazon.com/images/I/51KmxQjXBlL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Product 2',
        description: 'Perfect Partner for Your Digital World - Our High-Performance Computer Mouse!',
        price: 499,
        category:'electronics'
    },
    {
        image: 'https://m.media-amazon.com/images/I/51eFgb4stIL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Product 3',
        description: 'Perfect Partner for Your Digital World - Our High-Performance Computer Mouse!',
        price: 349,
        category:'electronics'
    },{
        image: 'https://m.media-amazon.com/images/I/51eG5GY2IXL._AC_UY327_FMwebp_QL65_.jpg',
        title: 'Product 4',
        description: 'Perfect Partner for Your Digital World - Our High-Performance Computer Mouse!',
        price: 999,
        category:'electronics'
    },
    {
        image: 'https://m.media-amazon.com/images/I/613SAOPmLeL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 1',
        description: 'Future of Connectivity - Our Cutting-Edge Smartphone!',
        price: 27899,
        category:'phone'
    },
    {
        image: 'https://m.media-amazon.com/images/I/6116+vSW+1L._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 2',
        description: 'Future of Connectivity - Our Cutting-Edge Smartphone!',
        price: 48999,
        category:'phone'
    },
    {
        image: 'https://m.media-amazon.com/images/I/71GLMJ7TQiL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 3',
        description: 'Future of Connectivity - Our Cutting-Edge Smartphone!',
        price: 65699,
        category:'phone'
    },
    {
        image: 'https://m.media-amazon.com/images/I/61-r9zOKBCL._AC_UL480_FMwebp_QL65_.jpg',
        title: 'Product 4',
        description: 'Future of Connectivity - Our Cutting-Edge Smartphone!',
        price: 77799,
        category:'phone'
    }
];


export default products