const productDetails = {
    seeds: {
        title: "Seeds",
        description: `
            <h3>Product Types</h3>
            <ul>
                <li>Sunflower Seeds</li>
                <li>Pumpkin Seeds</li>
                <li>Flax Seeds</li>
            </ul>
            <p>Our seeds are sourced from the best farms and are available in bulk quantities.</p>
            <h3>Pricing</h3>
            <p>Starting from $10 per kg, depending on the seed type and quantity.</p>
            <h3>Images</h3>
            <img src="https://via.placeholder.com/300x200" alt="Seeds">
            <h3>Videos</h3>
            <video width="320" height="240" controls>
                <source src="sample-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <h3>Quality Check</h3>
            <p>Our seeds go through a rigorous quality check to ensure the best product for our customers.</p>
        `,
    },
    nuts: {
        title: "Nuts",
        description: `
            <h3>Product Types</h3>
            <ul>
                <li>Almonds</li>
                <li>Cashews</li>
                <li>Walnuts</li>
            </ul>
            <p>We offer a wide variety of nuts, perfect for bulk orders for any business need.</p>
            <h3>Pricing</h3>
            <p>Starting from $15 per kg, depending on the nut type and quantity.</p>
            <h3>Images</h3>
            <img src="https://via.placeholder.com/300x200" alt="Nuts">
            <h3>Videos</h3>
            <video width="320" height="240" controls>
                <source src="sample-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <h3>Quality Check</h3>
            <p>All our nuts are thoroughly inspected to ensure top quality before packaging.</p>
        `,
    },
    dryfruits: {
        title: "Dry Fruits",
        description: `
            <h3>Product Types</h3>
            <ul>
                <li>Almonds</li>
                <li>Cashews</li>
                <li>Walnuts</li>
            </ul>
            <p>We provide premium quality dry fruits in bulk, perfect for retail and food processing industries.</p>
            <h3>Pricing</h3>
            <p>Starting from $20 per kg, depending on the dry fruit type and quantity.</p>
            <h3>Images</h3>
            <img src="https://via.placeholder.com/300x200" alt="Dry Fruits">
            <h3>Videos</h3>
            <video width="320" height="240" controls>
                <source src="sample-video.mp4" type="video/mp4">
                Your browser does not support the video tag.
            </video>
            <h3>Quality Check</h3>
            <p>Our dry fruits are selected and packed under strict quality control standards.</p>
        `,
    }
};

function showDetails(product) {
    const detailsSection = document.getElementById('product-details');
    const titleElement = document.getElementById('product-title');
    const contentElement = document.getElementById('product-content');

    titleElement.innerHTML = productDetails[product].title;
    contentElement.innerHTML = productDetails[product].description;

    detailsSection.style.display = 'block';
    detailsSection.scrollIntoView({ behavior: 'smooth' });
}
