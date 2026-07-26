// Dữ liệu thực đơn Cơm & Món Nhậu (Đã cập nhật theo danh sách của bạn)
const menuData = [
    // === CƠM SUẤT & CƠM RANG ===
    { id: 1, name: "Cơm Ba Chỉ Cháy Cạnh", price: 40000, category: "com" },
    { id: 2, name: "Cơm Sườn Xào Chua Ngọt", price: 45000, category: "com" },
    { id: 3, name: "Cơm Gà Chiên Mắm / Gà Luộc", price: 45000, category: "com" },
    { id: 4, name: "Cơm Tấm Sườn Bì Chả", price: 50000, category: "com" },
    { id: 5, name: "Cơm Cá Kho / Thịt Kho Trứng", price: 40000, category: "com" },
    { id: 6, name: "Cơm Rang Dưa Bò", price: 45000, category: "com" },
    { id: 7, name: "Cơm Rang Hải Sản Xào", price: 50000, category: "com" },
    { id: 8, name: "Canh Khoai Tây Hầm Xương (Thêm)", price: 25000, category: "com" },
    { id: 9, name: "Canh Sườn Chua (Thêm)", price: 25000, category: "com" },

    // === MÓN NHẬU ĐẶC SẮC ===
    { id: 10, name: "Ngan Cháy Tỏi", price: 180000, category: "nhau" },
    { id: 11, name: "Gà Ủ Muối Nguyên Con / Nửa Con", price: 150000, category: "nhau" },
    { id: 12, name: "Vịt Quay Tươi Ngon", price: 160000, category: "nhau" },
    { id: 13, name: "Gà / Ngan / Vịt Rang Muối", price: 160000, category: "nhau" },
    { id: 14, name: "Mì Xào Bò / Mì Xào Hải Sản", price: 60000, category: "nhau" },
    { id: 15, name: "Bún / Phở Xào Mềm", price: 55000, category: "nhau" },
    { id: 16, name: "Lẩu Thái Hải Sản / Lẩu Riêu Bò", price: 250000, category: "nhau" },

    // === MÓN ĂN KÈM & BÌNH DÂN ===
    { id: 17, name: "Nem Rán Giòn Rụm (Dĩa)", price: 50000, category: "kem" },
    { id: 18, name: "Chả Lá Lốt Thơm Lừng", price: 50000, category: "kem" },
    { id: 19, name: "Trứng Lộn (Quả)", price: 8000, category: "kem" },
    { id: 20, name: "Bánh Mì / Xôi Nóng", price: 15000, category: "kem" },
    { id: 21, name: "Cháo Đêm Cháo Sườn / Cháo Gà", price: 35000, category: "kem" },

    // === ĐỒ UỐNG & NƯỚC ÉP ===
    { id: 22, name: "Bia Tiger / Heineken (Lon)", price: 22000, category: "douong" },
    { id: 23, name: "Nước Ép Trái Cây Tươi", price: 30000, category: "douong" },
    { id: 24, name: "Nước Ngọt (Coke/Pepsi/7Up)", price: 15000, category: "douong" }
];

let cart = [];

// Hiển thị thực đơn
function renderMenu(items) {
    const grid = document.getElementById("menu-grid");
    grid.innerHTML = "";

    items.forEach(item => {
        const card = document.createElement("div");
        card.className = "menu-card";
        card.innerHTML = `
            <h3>${item.name}</h3>
            <div class="price">${item.price.toLocaleString()} VNĐ</div>
            <button class="add-btn" onclick="addToCart(${item.id})">+ Thêm món</button>
        `;
        grid.appendChild(card);
    });
}

// Lọc món theo danh mục
function filterMenu(category) {
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    if (event) event.target.classList.add('active');

    if (category === 'all') {
        renderMenu(menuData);
    } else {
        const filtered = menuData.filter(item => item.category === category);
        renderMenu(filtered);
    }
}

// Thêm món vào giỏ
function addToCart(id) {
    const item = menuData.find(m => m.id === id);
    const cartItem = cart.find(c => c.id === id);

    if (cartItem) {
        cartItem.quantity += 1;
    } else {
        cart.push({ ...item, quantity: 1 });
    }

    updateCartUI();
}

// Cập nhật giao diện giỏ hàng
function updateCartUI() {
    const cartList = document.getElementById("cart-items");
    const totalSpan = document.getElementById("total-price");

    if (cart.length === 0) {
        cartList.innerHTML = `<li class="empty-cart">Chưa có món nào được chọn</li>`;
        totalSpan.innerText = "0 VNĐ";
        return;
    }

    cartList.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        const li = document.createElement("li");
        li.className = "cart-item";
        li.innerHTML = `
            <span>${item.name} (x${item.quantity})</span>
            <strong>${(item.price * item.quantity).toLocaleString()} đ</strong>
        `;
        cartList.appendChild(li);
    });

    totalSpan.innerText = total.toLocaleString() + " VNĐ";
}

// Đặt hàng
function checkout() {
    if (cart.length === 0) {
        alert("Vui lòng chọn ít nhất 1 món!");
        return;
    }
    alert("Cảm ơn bạn! Đơn hàng của bạn đã được tiếp nhận thành công.");
    cart = [];
    updateCartUI();
}

// Khởi chạy ban đầu
renderMenu(menuData);
