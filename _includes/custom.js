<script type="application/javascript">
	// Hacky way to show the editing view in gDocs if needed.
	function getQueryStringValue(key) {
		return decodeURIComponent(
			window.location.search.replace(
			new RegExp(
			"^(?:.*[&\\?]"
					+ encodeURIComponent(key).replace(/[\.\+\*]/g, "\\$&")
					+ "(?:\\=([^&]*))?)?.*$", "i"), "$1")
		);
	}

	function switchToEdit() {
		if (getQueryStringValue("edit") == 'true') {
			gdoc.src = 'https://docs.google.com/document/d/{{ site.github.googledoc_id }}/edit?embedded=true';
		} else {
			// Do nothing.
			//gdoc.src = 'https://gdoc.pub/doc/{{ site.github.googledoc_id }}';
		}
	}
	window.onload = switchToEdit;


</script>
