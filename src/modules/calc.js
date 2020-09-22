const calc = (price = 100) => {

	const calcBlock = document.querySelector('.calc-block'),
		calcType = document.querySelector('.calc-type'),
		calcSquare = document.querySelector('.calc-square'),
		calcDay = document.querySelector('.calc-day'),
		calcCount = document.querySelector('.calc-count'),
		totalValue = document.getElementById('total'),
		allInputs = document.querySelectorAll('input');
	
	const numAnimation = (output, start, end, duration) => {
		let startTimestamp = null;
		const step = timestamp => {
			if (!startTimestamp) {
			startTimestamp = timestamp;
			}
			const progress = Math.min((timestamp - startTimestamp) / duration, 1);
			output.innerHTML = Math.floor(progress * (end - start) + start);
			if (progress < 1) {
			window.requestAnimationFrame(step);
			}
		};
		window.requestAnimationFrame(step);
		};
	
		const countSum = () => {
		let total = 0,
			countValue = 1,
			dayValue = 1;
		const typeValue = calcType.options[calcType.selectedIndex].value,
			squareValue = +calcSquare.value;
	
		if (calcCount.value > 1) {
			countValue += (calcCount.value - 1) / 10;
		} else if (calcCount.value && calcCount.value == 0) {
			countValue = 0;
		}
		if (calcDay.value && calcDay.value == 0) {
			dayValue = 0;
		} else if (calcDay.value && calcDay.value != 0 && calcDay.value < 5) {
			dayValue *= 2;
		} else if (calcDay.value && calcDay.value != 0 && calcDay.value < 10) {
			dayValue *= 1.5;
		}
	
		if (typeValue && squareValue) {
			total = Math.floor(price * typeValue * squareValue * countValue * dayValue);
			numAnimation(totalValue, 0, total, 200);
		} else {
			totalValue.textContent = 0;
			calcSquare.value = "";
			calcCount.value = "";
			calcDay.value = "";
		}
		};
	
		calcBlock.addEventListener('change', event => {
		const target = event.target;
		if (target.matches('select')) {
			countSum();
		}
		});
	
		allInputs.forEach(item => {
		item.addEventListener('blur', () => {
			countSum();
		});
		});
	
		calcBlock.addEventListener('input', event => {
		const target = event.target;
		if (target.matches('input')) {
			target.value = target.value.replace(/[^\d]/g, '');
		}
		});
	};
	export default calc;
	