<script>
</script>

<h1>We start our journey here...</h1>

<input />
<select>
	<option>Option</option>
</select>
<button>Button</button>

<!-- The actual page content (specific to the current route, like /login, /dashboard, etc.) that gets rendered inside the layout's <slot />. -->

<!-- <DisplayName></DisplayName> -->

<style lang="scss">
	h1 {
		color: red;
		font-size: functions.toRem(36);
		@include breakpoint.up('md') {
			color: green;
		}
		@include breakpoint.up('lg') {
			color: blue;
		}
	}
</style>
