<script lang="ts">
	let username = $state('');
	let firstName = $state('');
	let lastName = $state('');
	// One way of putting a derivitaive together using a template literal
	// let fullName = $derived(`${firstName} ${lastName}`);

	// OR you could use an arrow function in your derived rune with the keyword .by but it is not necessary.
	let fullName = $derived.by(() => {
		return `${firstName} ${lastName}`;
	});

	let displayUsernameOrFullName = $state(true);

	let src = 'https://picsum.photos/200/300';
	let bio = 'Hello, <b>this</b> is me.';

	$effect(() => {
		if (username || fullName) {
			console.log('User has a username or a full name.');
		} else {
			console.log('There is no username or full name....');
		}
	});
</script>

<img {src} alt="Random generated of {fullName}" />
<h1>{fullName}</h1>
<p>{@html bio}</p>

<!-- <label for="">Current Username:</label> -->
<!-- <input
	value={username}
	oninput={(e) => {
		username = e.currentTarget.value;
        // No need to do this because we have a short hand version called bind.
	}}
/> -->

<label for="">Current Username:</label>
<input bind:value={username} />

<label for="">Current First Name:</label>
<input bind:value={firstName} />

<label for="">Current Last Name:</label>
<input bind:value={lastName} />

<h1>Current {username ? 'Username' : 'Full Name'}: {username || fullName}</h1>

<style>
</style>
