<script>
	import Logo from '$lib/components/Logo.svelte';
	import Mail from '$lib/components/Mail.svelte';
	import Phone from '$lib/components/Phone.svelte';
	import '../app.css';

	let hoveringPhone = false;
	let hoveringMail = false;
</script>

<header
	class="fixed top-2.5 left-2 right-2 z-10 box-border flex h-12 max-w-xs flex-row gap-1 overflow-hidden rounded-sm sm:h-14 sm:max-w-sm md:h-16 md:max-w-md"
>
	<a class="block h-full flex-1 bg-green-300 bg-opacity-90 p-4 pl-5 pt-3.5 text-stone-800" href="/">
		<Logo />
	</a>
	<a
		class="relative block h-full w-14 flex-none bg-green-300 bg-opacity-90 p-4 text-stone-800 sm:w-16 md:w-20"
		href="mailto:kontakt@kappelmeier.de"
		on:mouseenter={() => {
			hoveringMail = true;
		}}
		on:mouseleave={() => {
			hoveringMail = false;
		}}
	>
		<Mail highlight={hoveringMail} />
	</a>
	<a
		class="relative block h-full w-14 flex-none bg-green-300 bg-opacity-90 p-4 text-stone-800 sm:w-16 md:w-20"
		href="tel:+4994155874"
		on:mouseenter={() => {
			hoveringPhone = true;
		}}
		on:mouseleave={() => {
			hoveringPhone = false;
		}}
	>
		<Phone highlight={hoveringPhone} />
	</a>
</header>

<main>
	<slot />
</main>

<footer class="flex w-full max-w-xs flex-row gap-2 p-2 lg:fixed lg:bottom-0 lg:left-0">
	<a class="text-sm text-green-300" href="/privacy">Datenschutz</a>
	<a class="text-sm text-green-300" href="/imprint">Impressum</a>
</footer>
