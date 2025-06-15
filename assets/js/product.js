


    // main product
function renderItem(items) {
    var listProduct = document.getElementById('list-product');
    var htmls = items.map(function (item) {
        return `
        <div data="${item.id}" class="col l-2-4 m-3 c-6 home-product-item">
            <a class="home-product-item-link" href="#">
                <div class="home-product-item__img" style="background-image: url(./assets/img/home/${item.id}.PNG);"></div>
                <div class="home-product-item__info">
                    <h4 class="home-product-item__name">${item.name}</h4>
                    <div class="home-product-item__price">
                        <p class="home-product-item__price-old">${item.oldPrice}đ</p>
                        <p class="home-product-item__price-new">${item.newPrice}đ</p>
                        <i class="home-product-item__ship fas fa-shipping-fast"></i>
                    </div>
                    <div class="home-product-item__footer">
                        <div class="home-product-item__save">
                            <input type="checkbox" id="heart-save-${item.id}">
                            <label for="heart-save-${item.id}" class="far fa-heart"></label>
                        </div>
                        <div class="home-product-item__rating-star">
                            <i class="star-checked far fa-star"></i>
                            <i class="star-checked far fa-star"></i>
                            <i class="star-checked far fa-star"></i>
                            <i class="star-checked far fa-star"></i>
                            <i class="star-uncheck far fa-star"></i>
                        </div>
                        <div class="home-product-item__saled">Đã bán ${item.saled}</div>
                    </div>
                    <div class="home-product-item__origin">${item.origin}</div>
                    <div class="home-product-item__favourite">
                        Yêu thích
                    </div>
                    <div class="home-product-item__sale-off">
                        <div class="home-product-item__sale-off-value">${item.saleOff}%</div>
                        <div class="home-product-item__sale-off-label">GIẢM</div>
                    </div>
                </div>
                <div class="home-product-item-footer">Tìm sản phẩm tương tự</div>
            </a>
        </div>
        `;
    });
    listProduct.innerHTML = htmls.join('');
}


    function responsive() {
        var listItem = document.querySelectorAll('.home-product-item');
        var bodyWidth = document.body.clientWidth;
        var listItemLength = listItem.length;
        
        if(bodyWidth < 740) {
            for(var i = listItemLength - 1; i >= Math.floor(listItemLength / 2) * 2; i--) {
                listItem[i].remove();
            }
        }
        else if(bodyWidth < 1024) {
            for(var i = listItemLength - 1; i >= Math.floor(listItemLength / 4) * 4; i--) {
                listItem[i].remove();
            }
        }
    }

    function checkPageArrow(){
        var paginationLink = document.querySelectorAll('.pagination-item-link');
        if(document.querySelector('.pagination-item--active a').textContent == 1){
            paginationLink[0].classList.add('pagination-item-link--disable');
            if(paginationLink[0].attributes.href){
                paginationLink[0].attributes.removeNamedItem('href');
            }
        }
        else {
            paginationLink[0].classList.remove('pagination-item-link--disable');
            if(!paginationLink[0].attributes.href){
                paginationLink[0].href = '#';
            }
        }
        if (document.querySelector('.pagination-item--active a').textContent == 8){
            paginationLink[6].classList.add('pagination-item-link--disable');
            if(paginationLink[6].attributes.href){
                paginationLink[6].attributes.removeNamedItem('href');
            }
        } 
        else {
            paginationLink[6].classList.remove('pagination-item-link--disable');
            if(!paginationLink[6].attributes.href){
                paginationLink[6].href = '#';
            }
        }
    }

    function handlePagination(){
        var paginationItem = document.querySelectorAll('.pagination-item');
        var paginationLength = paginationItem.length;
        checkPageArrow();
        for(var i = 0; i < paginationLength; i++){
            if(i != 0 && i != 4 && i != paginationLength - 1){
                // handle active button
                var isActive = document.querySelector('.pagination-item--active a');
                if(isActive.attributes.href){
                    isActive.attributes.removeNamedItem('href');
                }
                else {
                    var paginationItemLink = document.querySelectorAll('.pagination-item-link');
                    paginationItemLink[i].setAttribute('href', '#');
                }
                // handle other button
                paginationItem[1].onclick = function(){
                    var content = this.querySelector('a').textContent;
                    var paginationItemLink = document.querySelectorAll('.pagination-item-link');
                    if(content >= 2){
                        paginationItemLink[1].textContent = Number(paginationItemLink[1].textContent) - 1;
                        paginationItemLink[2].textContent = Number(paginationItemLink[2].textContent) - 1;
                        paginationItemLink[3].textContent = Number(paginationItemLink[3].textContent) - 1;
                        document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                        paginationItem[2].classList.add('pagination-item--active');
                        shuffer();
                    }
                    if(content < 2){
                        document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                        this.classList.add('pagination-item--active');
                    }
                    checkPageArrow();
                }
                paginationItem[2].onclick = function(){
                    document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                    this.classList.add('pagination-item--active');
                    shuffer();
                    checkPageArrow();
                }
                paginationItem[3].onclick = function(e){
                    var content = this.querySelector('a').textContent;
                    var paginationItemLink = document.querySelectorAll('.pagination-item-link');
                    if(content < 7){
                        paginationItemLink[1].textContent = Number(paginationItemLink[1].textContent) + 1;
                        paginationItemLink[2].textContent = Number(paginationItemLink[2].textContent) + 1;
                        paginationItemLink[3].textContent = Number(paginationItemLink[3].textContent) + 1;
                        document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                        paginationItem[2].classList.add('pagination-item--active');
                        shuffer();
                    }
                    if(content == 7){
                        document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                        this.classList.add('pagination-item--active');
                        e.preventDefault();
                    }
                    checkPageArrow();
                }
                paginationItem[5].onclick = function(e){
                    var content = document.querySelector('.pagination-item--active a').textContent;
                    if(content != 8){
                        var paginationItemLink = document.querySelectorAll('.pagination-item-link');
                        document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                        this.classList.add('pagination-item--active');
                        paginationItemLink[1].textContent = 5;
                        paginationItemLink[2].textContent = 6;
                        paginationItemLink[3].textContent = 7;
                        shuffer();
                        checkPageArrow();
                    }
                    else {
                        e.preventDefault();
                    }
                }
            }
            else if (i == 0 || i == paginationLength - 1){
                var paginationItemLink = document.querySelectorAll('.pagination-item-link');
                // arrow left
                paginationItem[0].onclick = function(){
                    if(document.querySelector('.pagination-item--active a').textContent == 8){
                        document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                        paginationItem[3].classList.add('pagination-item--active');
                    }
                    else if(document.querySelector('.pagination-item--active a').textContent == 2){
                        document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                        paginationItem[1].classList.add('pagination-item--active');
                    }
                    else if(document.querySelector('.pagination-item--active a').textContent > 1){
                        paginationItemLink[1].textContent = Number(paginationItemLink[1].textContent) - 1;
                        paginationItemLink[2].textContent = Number(paginationItemLink[2].textContent) - 1;
                        paginationItemLink[3].textContent = Number(paginationItemLink[3].textContent) - 1;
                        shuffer();
                    }
                    checkPageArrow();
                }
                // arrow right
                paginationItem[paginationLength - 1].onclick = function(){
                    if(document.querySelector('.pagination-item--active a').textContent == 7){
                        document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                        paginationItem[5].classList.add('pagination-item--active');
                    }
                    else if(document.querySelector('.pagination-item--active a').textContent == 1){
                        document.querySelector('.pagination-item--active').classList.remove('pagination-item--active');
                        paginationItem[2].classList.add('pagination-item--active');
                    }
                    else if(document.querySelector('.pagination-item--active a').textContent < 7){
                        paginationItemLink[1].textContent = Number(paginationItemLink[1].textContent) + 1;
                        paginationItemLink[2].textContent = Number(paginationItemLink[2].textContent) + 1;
                        paginationItemLink[3].textContent = Number(paginationItemLink[3].textContent) + 1;
                        shuffer();
                    }
                    checkPageArrow();
                }
            }
        }
    }

    // catagory

// var homeFilter = document.querySelectorAll('.home-filter-btn');

// for (var i = 0; i < homeFilter.length; i++) {
//     homeFilter[i].onclick = function () {
//         var current = document.querySelector('.home-filter-btn.btn--primary');
//         if (current) current.classList.remove('btn--primary');
//         this.classList.add('btn--primary');

//         const sortType = this.dataset.sort;
//         shuffer(sortType);
//     };
// }

// var homeFilterSort = document.querySelectorAll('.home-filter-sort-item-link');

// for (var i = 0; i < homeFilterSort.length; i++) {
//     homeFilterSort[i].onclick = function (e) {
//         e.preventDefault();
//         const sortType = this.dataset.sort;
//         shuffer(sortType);
//     };
// }

// function shuffer(sortType = '') {
//     let sorted = [...products]; // danh sách sản phẩm

//     const parsePrice = (p) => Number(p.replace(/\./g, ''));
//     const parseSaled = (s) => parseFloat(s.replace(',', '.')) * 1000;

//     if (sortType === 'price-asc') {
//         sorted.sort((a, b) => parsePrice(a.newPrice) - parsePrice(b.newPrice));
//     } else if (sortType === 'price-desc') {
//         sorted.sort((a, b) => parsePrice(b.newPrice) - parsePrice(a.newPrice));
//     } else if (sortType === 'best-selling') {
//         sorted.sort((a, b) => parseSaled(b.saled) - parseSaled(a.saled));
//     }

//     renderProducts(sorted); // Hàm hiển thị sản phẩm
// }

// function renderProducts(data) {
//     const container = document.querySelector('.product-container'); // class đúng chỗ bạn render
//     container.innerHTML = '';

//     data.forEach(item => {
//         container.innerHTML += `
//             <div class="product-item">
//                 <h3>${item.name}</h3>
//                 <p>Giá: ${item.newPrice} đ</p>
//                 <p>Đã bán: ${item.saled}</p>
//                 <p>Xuất xứ: ${item.origin}</p>
//             </div>
//         `;
//     });
// }

    // Auth form
    
    

    const modal = document.getElementById("auth-modal");
        const loginForm = document.getElementById("login-form");
        const registerForm = document.getElementById("register-form");
        const openLoginBtn = document.getElementById("open-login");
        const openRegisterBtn = document.getElementById("open-register");
        const backBtns = document.querySelectorAll(".auth-form__back");
        const toLogin = document.getElementById("to-login");
        const toRegister = document.getElementById("to-register");

        // Mở modal với Đăng ký
        openRegisterBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("show");
        registerForm.classList.add("active");
        loginForm.classList.remove("active");
        });

        // Mở modal với Đăng nhập
        openLoginBtn.addEventListener("click", (e) => {
        e.preventDefault();
        modal.classList.add("show");
        loginForm.classList.add("active");
        registerForm.classList.remove("active");
        });

        // Chuyển sang đăng nhập
        toLogin.addEventListener("click", () => {
        loginForm.classList.add("active");
        registerForm.classList.remove("active");
        });

        // Chuyển sang đăng ký
        toRegister.addEventListener("click", () => {
        registerForm.classList.add("active");
        loginForm.classList.remove("active");
        });

        // Ẩn modal
        backBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            modal.classList.remove("show");
            loginForm.classList.remove("active");
            registerForm.classList.remove("active");
        });
        });

        // Click ngoài modal để đóng
        modal.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("show");
            loginForm.classList.remove("active");
            registerForm.classList.remove("active");
        }
        });



const dataUrl = './assets/db/shopee.json';
let originalList = [];



// Load ban đầu
fetch(dataUrl)
    .then(res => res.json())
    .then(data => {
        originalList = data;
        renderItem(originalList);
        responsive();
        handlePagination();
    });

function convertToNumber(str) {
    if (!str) return 0;
    return Number(str.replace(/[,.k]/g, function (match) {
        if (match === 'k') return '000';
        if (match === ',') return '';
        if (match === '.') return '';
        return match;
    }));
}

// Load ban đầu
fetch(dataUrl)
    .then(res => res.json())
    .then(data => {
        originalList = data;
        renderItem(originalList);
        responsive();
        handlePagination();
    });

function convertToNumber(str) {
    if (!str) return 0;
    return Number(str.replace(/[,.k]/g, function (match) {
        if (match === 'k') return '000';
        if (match === ',') return '';
        if (match === '.') return '';
        return match;
    }));
}

function sortProducts(sortType) {
    let sorted = [...originalList];
    switch (sortType) {
        case 'price-asc':
            sorted.sort((a, b) => convertToNumber(a.newPrice) - convertToNumber(b.newPrice));
            break;
        case 'price-desc':
            sorted.sort((a, b) => convertToNumber(b.newPrice) - convertToNumber(a.newPrice));
            break;
        case 'best-selling':
            sorted.sort((a, b) => convertToNumber(b.saled) - convertToNumber(a.saled));
            break;
        case 'newest':
            sorted = sorted.reverse(); // Giả sử sản phẩm mới ở cuối danh sách
            break;
        case 'popular':
        default:
            sorted.sort(() => Math.random() - 0.5); // shuffle
            break;
    }
    renderItem(sorted);
    responsive();
    handlePagination();
}


// Fetch dữ liệu từ JSON
fetch('./assets/db/shopee.json')
  .then(response => response.json())
  .then(data => {
    originalList = data;
    renderItem(originalList); // render ban đầu
    responsive();
    handlePagination();
  });

// Sự kiện khi nhấn nút "Áp dụng"
document.querySelector('.category-group-filter-btn').addEventListener('click', () => {
  applyFilters();
});

// Hàm lọc theo thành phố và khoảng giá
function applyFilters() {
  let filtered = [...originalList];

  // --- LỌC THEO THÀNH PHỐ ---
  const checkedCities = document.querySelectorAll('.category-group-item-check:checked');
  const selectedCities = Array.from(checkedCities).map(cb => cb.value);

  if (selectedCities.length > 0) {
    filtered = filtered.filter(item => selectedCities.includes(item.origin));
  }

  // --- LỌC THEO KHOẢNG GIÁ ---
  const minPriceInput = document.getElementById('min-price');
  const maxPriceInput = document.getElementById('max-price');
  const minPrice = parseInt(minPriceInput.value) || 0;
  const maxPrice = parseInt(maxPriceInput.value) || Infinity;

  filtered = filtered.filter(item => {
    const price = parseInt(item.newPrice.replace(/\./g, '')); // bỏ dấu chấm, chuyển về số
    return price >= minPrice && price <= maxPrice;
  });

  // --- HIỂN THỊ DANH SÁCH ĐÃ LỌC ---
  renderItem(filtered);
  responsive();
  handlePagination();
}