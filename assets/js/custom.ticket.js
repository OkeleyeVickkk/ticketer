const backBtn = document.querySelector(".v-go-back");
const splide = document.querySelector(".splide");
const allBlockItems = document.querySelectorAll(".v-each-ticket-wrap");

if ((null || undefined) != backBtn) {
	backBtn.addEventListener("click", () => window.history.back());
}

if ((null || undefined) != splide) {
	new Splide(splide, {
		perPage: 2,
		perMove: 1,
		type: "loop",
		arrows: false,
		rewind: true,
		drag: "free",
		focus: "center",
		gap: "1rem",
		breakpoints: {
			1024: {
				perPage: 1.6,
				gap: ".7rem",
			},
			768: {
				perPage: 1.2,
				gap: ".7rem",
			},
			480: {
				perPage: 1,
				gap: ".7rem",
			},
		},
	}).mount();
}

if (allBlockItems.length) {
	allBlockItems.forEach((blockItem, index, parentArr) => {
		const viewBarCodeBtn = blockItem.querySelector(".v-footer .v-bar-code");

		if (viewBarCodeBtn != (null || undefined)) {
			viewBarCodeBtn.addEventListener("click", function () {
				const barCodeContainer = blockItem.querySelector(".v-hide-show");
				const barCode = blockItem.querySelector(".v-barcode-image");
				const verticalBar = blockItem.querySelector(".vertical-bar");
				if (barCode.classList.contains("active") || barCodeContainer.classList.contains("active")) return;
				barCode.classList.add("active");
				barCodeContainer.classList.add("active");

				setTimeout(() => {
					verticalBar.classList.add("in-active");
				}, 3500 * 2);
			});
		}
	});
}
