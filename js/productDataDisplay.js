document.addEventListener('DOMContentLoaded', function() {
    // Assume you want the first client for now
    const client = window.projectItems[0];

    // Set main title and subtitle
    document.getElementById('page-title').innerHTML = `${client.pageTitleMain} <span class="fs-4">${client.pageTitleSub}</span>`;
    document.getElementById('client-desc').innerHTML = client.clientDesc;
    document.getElementById('client-image').src = 'img/clients/' + client.clientImage;

    // Render product modules
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    client.productItems.forEach((product, idx) => {
      const prodDiv = document.createElement('div');
      prodDiv.className = 'row align-items-stretch mb-4';
      prodDiv.innerHTML = `
        <div class="pb-3 pt-3 d-flex flex-coulmn" data-aos="fade-right">
          <div class="col-12 col-lg-7 justify-content-center">
            <h2 class="h3">${String(idx+1).padStart(2, '0')}. ${product.prodName}</h2>
            <p class="text-secondary">${product.prodDescription}</p>
          </div>
          <div class="col-12 col-lg-4 offset-lg-1 p-5 product-gallery-section d-flex align-items-center justify-content-center border rounded-4"
            style="aspect-ratio: 1 / 1; width: 100%; max-width: 350px; position: relative; cursor: pointer;"
            data-product-index="${idx}">
            <img
              src="img/products/${product.prodImgItems[0]?.imgPath || 'landing/FBS_Desktop_Dark_Mockup_Bg.png'}"
              alt="Product preview"
              class="rounded-4"
              style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; z-index: 1;"
            />
            <div class="gallery-icon-overlay">
              <svg xmlns="http://www.w3.org/2000/svg" id="gallery" width="28" height="28" version="1.1" viewBox="0 0 4.233 4.233">
                <g transform="translate(74.005 -1.7)">
                  <path d="m -73.085783,1.9812153 h 1.880308 c 0.752408,0 1.041796,0.5750058 1.041796,1.0335288 v 2.149841" fill="none" stroke="#ffffff" stroke-width=".264583" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="m -73.071107,2.5685481 h 1.782954 c 0.293158,0 0.529166,0.2360083 0.529166,0.5291666 v 1.7942055 c 0,0.2931583 -0.236008,0.5291666 -0.529166,0.5291666 h -1.782954 c -0.293159,0 -0.529167,-0.2360083 -0.529167,-0.5291666 V 3.0977148 c 0,-0.2931584 0.236008,-0.5291667 0.529167,-0.5291667 z" fill="none" stroke="#ffffff" stroke-width=".264583" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M -70.778925,4.2705683 -71.274561,3.704775 c -0.05821,-0.066452 -0.143969,-0.093748 -0.225493,-0.093748 -0.08152,-10e-8 -0.163025,0.03128 -0.225493,0.093748 l -0.447561,0.4475607 -0.17971,-0.1797095 c -0.124936,-0.1249365 -0.32605,-0.1249367 -0.450987,0 l -0.7548,0.7840321" fill="none" stroke="#ffffff" stroke-width=".264583" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M -72.173108,4.1523357 -72.44171,4.4209368" fill="none" stroke="#ffffff" stroke-width=".264583" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="m -72.160453,3.3084102 h 0.07441" fill="none" stroke="#ffffff" stroke-width=".264583" stroke-linecap="round" stroke-linejoin="round"/>
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div class="d-flex justify-content-center">
          <hr class="" style="border-color: #E8E8E8; border-width: 1px; width: 80%;" data-aos="fade"/>
        </div>
      `;
      productList.appendChild(prodDiv);
    });

    // Modal carousel logic
    productList.addEventListener('click', function(e) {
      const gallerySection = e.target.closest('.product-gallery-section');
      if (gallerySection && gallerySection.dataset.productIndex !== undefined) {
        const idx = gallerySection.dataset.productIndex;
        const images = client.productItems[idx].prodImgItems;
        renderCarousel(images);
        // Show the modal
        var modal = new bootstrap.Modal(document.getElementById('imageCarouselModal'));
        modal.show();
      }
    });

    function renderCarousel(images) {
      const carouselInner = document.getElementById('carousel-inner');
      carouselInner.innerHTML = images.map((img, i) => `
        <div class="carousel-item${i === 0 ? ' active' : ''} h-100">
          <div class="custom-carousel-img-wrapper h-100">
            <img src="img/products/${img.imgPath}" alt="${img.imgName}">
          </div>
          <div class="carousel-caption d-none d-md-block">
            <h5>${img.imgName}</h5>
            <p>${img.imgDesc}</p>
          </div>
        </div>
      `).join('');
    }
  });