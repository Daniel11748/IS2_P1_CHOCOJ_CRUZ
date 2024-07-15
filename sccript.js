document.addEventListener('DOMContentLoaded', () => {
    const productoForm = document.getElementById('productoForm');
    const productoNombre = document.getElementById('productNombre');
    const productoPrecio = document.getElementById('productPrecio');
    const productoTable = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    const totalComprado = document.getElementById('totalComprado');

    let total = 0;

    productoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const name = productoNombre1.value;
        const price = parseFloat(productoPrecio.value).toFixed(2);

        const newRow = document.createElement('tr');
        
        newRow.innerHTML = `
            <td>${nombre}</td>
            <td>$${precio}</td>
            <td><input type="checkbox" class="purchase-checkbox"></td>
            <td><button class="delete-btn">Eliminar</button></td>
        `;

 
})

})
