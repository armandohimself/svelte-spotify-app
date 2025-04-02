<script>
	// import DisplayName from '$lib/components/DisplayName.svelte';
</script>

<h1>We start our journey here...</h1>

<input />
<select>
	<option>Option</option>
</select>
<button>Button</button>

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
