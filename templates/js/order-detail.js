/**
 * Set the id to query the order
 */

let urlParams = new URLSearchParams(window.location.search)
let id = urlParams.get('id');
console.log("id usuarioss",id)


/**
 * Fetchs de order detail and appends to the page.
 * 
 * ****************************
 * Please change '/json/order.json?id=${id}' 
 * with your service endpoint below
 * ****************************
 */
//fetch(`json/order.json?id=${id}`)
fetch(`http://localhost:3002/pizza/obtenerUno?id=${id}`)
    .then(response => response.json())
    .then(order => {
        let template = createRowTemplate(order);
        $("#order").append(template);
    });

/**
 * Find the template tag and populate it with the data
 * @param order
 */
function createRowTemplate(order) {
    let template = $("#order-template")[0].innerHTML;
    return Mustache.render(template, order);
}
