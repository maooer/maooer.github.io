var productNames = ['大型洗碗机', '高级电视机', '豪华冰箱', '便携式空调', '全自动洗衣机', '智能烤箱', '节能热水器'];
var productSpecs = ['最新科技制造，性能卓越', '品质保证，服务周到', '采用环保材料，节能环保', '智能控制，操作简便', '耐用度高，长期使用无忧', '设计时尚，为您的家增添色彩', '精工细作，品质卓越'];

var products = [];
for (var i = 0; i < 21; i++) {
    var product = {
        image: 'https://picsum.photos/200?random=' + (i + 1),
        name: productNames[Math.floor(Math.random() * productNames.length)], // 商品名从 productNames 数组中随机选取
        brand: ['香奈儿', '索尼', '苹果', '三星', '华为'][Math.floor(Math.random() * 5)],
        size: (100 + Math.floor(Math.random() * 100)) + 'x' + (100 + Math.floor(Math.random() * 100)) + 'x' + (100 + Math.floor(Math.random() * 100)) + 'mm',
        specs: productSpecs[Math.floor(Math.random() * productSpecs.length)] // 规格从 productSpecs 数组中随机选取
    };
    products.push(product);
}

var section = document.querySelector('#product-list'); // 选择你的 product-list 元素并将其存入变量 section

products.forEach(function(product) { // 遍历 products 数组，对数组中每个 product 元素执行以下函数
    var productCard = document.createElement('div'); // 创建一个新的 div 元素，并将其存入变量 productCard
    productCard.className = 'product-card'; // 为 productCard 元素添加 class，使其具有 product-card 的样式

    var productImage = document.createElement('img'); // 创建一个新的 img 元素，并将其存入变量 productImage
    productImage.className = 'product-image'; // 为 productImage 元素添加 class，使其具有 product-image 的样式
    productImage.src = product.image; // 设置 productImage 元素的 src 属性为 product 的 image 属性值
    productCard.appendChild(productImage); // 将 productImage 元素添加到 productCard 元素中

    var createProductName = function(label, value) { // 定义一个函数，该函数接受两个参数：label 和 value
        var productNameDiv = document.createElement('div'); // 创建一个新的 div 元素，并将其存入变量 productNameDiv
        productNameDiv.className = 'product-info'; // 为 productNameDiv 元素添加 class，使其具有 product-info 的样式

        var p1 = document.createElement('p'); // 创建一个新的 p 元素，并将其存入变量 p1
        p1.className = 'product-info1'; // 为 p 元素添加 class，使其具有 product-info1 的样式
        p1.textContent = label; // 设置 p 元素的文本内容为 label 参数的值
        productNameDiv.appendChild(p1); // 将 p 元素添加到 productNameDiv 元素中

        var p2 = document.createElement('p'); // 创建一个新的 p 元素，并将其存入变量 p2
        p2.className = 'product-info2'; // 为 p 元素添加 class，使其具有 product-info2 的样式
        p2.textContent = value; // 设置 p 元素的文本内容为 value 参数的值
        productNameDiv.appendChild(p2); // 将 p 元素添加到 productNameDiv 元素中

        return productNameDiv; 
    };

    productCard.appendChild(createProductName('商品：', product.name)); 
    productCard.appendChild(createProductName('品牌：', product.brand));
    productCard.appendChild(createProductName('尺寸：', product.size));
    productCard.appendChild(createProductName('规格：', product.specs)); 

    var button = document.createElement('button');
    button.className = 'add-to-favorites'; 
    button.textContent = '加入收藏'; 
    productCard.appendChild(button); 

    section.appendChild(productCard); 
});