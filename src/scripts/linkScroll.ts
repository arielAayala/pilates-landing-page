class LinkScroll {
		constructor(idLink: string, idScroll?: string) {
			document
				.getElementById(idLink)
				?.addEventListener("click", (ev: MouseEvent) => {
					if (idScroll) {
						document
							.getElementById(idScroll)
							?.scrollIntoView({ behavior: "smooth" });
					} else {
						window.scroll({
							top: 0,
							behavior: "smooth",
						});
					}
				});
		}
	}

	new LinkScroll("linkHome");
	new LinkScroll("linkAbout", "about");
	new LinkScroll("linkServices", "services");
	new LinkScroll("linkContact", "contact");