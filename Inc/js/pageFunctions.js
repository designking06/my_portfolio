function displayModal(element,modal){
	$(element).click(function () {
	$(modal).modal({show : true});
	});
}

let i = 1;
document.getElementById('add-new-person').onclick = function () {
	    let template = `
					<div class="row align-items-bottom">
						<div class="col-sm-4">
							<input type="text" name="product[${i}][size]" placeholder="Enter size" class="form-control" required>
						</div>
						<div class="col-sm-4">
							<input type="number" step=".01" min="0.00" max="100000.00" name="product[${i}][price]" placeholder="Enter price" class="form-control" required>
						</div>
						<div class="col-sm-4">
							<input type="amt" name="product[${i}][amt]" placeholder="Enter amount in inventory" class="form-control" required>
						</div>
					</div>
					<hr>
					`;

	    let container = document.getElementById('people-container');
	    let div = document.createElement('div');
	    div.innerHTML = template;
	    container.appendChild(div);

	    i++;
}
