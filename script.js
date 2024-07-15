document.addEventListener('DOMContentLoaded', () => {
    const productoForm = document.getElementById('productoForm');
    const productoNombre = document.getElementById('productoNombre');
    const productoPrecio = document.getElementById('productoPrecio');
    const productoTable = document.getElementById('productoTable').getElementsByTagName('tbody')[0];
    const totalComprado = document.getElementById('totalComprado');

    let total = 0;

    productoForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const nombre = productoNombre.value;
        const precio = parseFloat(productoPrecio.value).toFixed(2);

        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${nombre}</td>
            <td>Q${precio}</td>
            <td><input type="checkbox" class="purchase-checkbox"></td>
            <td><button class="delete-btn">Eliminar</button></td>
        `;

        productoTable.appendChild(newRow);

        newRow.querySelector('.purchase-checkbox').addEventListener('change', updateTotal);
        newRow.querySelector('.delete-btn').addEventListener('click', deleteProduct);

        productoForm.reset();
    });

    function updateTotal(e) {
        const checkbox = e.target;
        const precio = parseFloat(checkbox.closest('tr').children[1].textContent.replace('Q', ''));

        if (checkbox.checked) {
            total += precio;
        } else {
            total -= precio;
        }

        totalComprado.textContent = total.toFixed(2);
    }

    function deleteProduct(e) {
        const row = e.target.closest('tr');
        const checkbox = row.querySelector('.purchase-checkbox');
        const precio = parseFloat(row.children[1].textContent.replace('Q', ''));

        if (checkbox.checked) {
            total -= precio;
        }

        row.remove();
        totalComprado.textContent = total.toFixed(2);
    }
});
