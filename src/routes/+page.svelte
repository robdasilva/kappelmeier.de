<script>
	import introImg from '$lib/images/intro.jpg';
	import kappelmeier9876Img from '$lib/images/kappelmeier_9876.jpg';
	import kappelmeier9924Img from '$lib/images/kappelmeier_9924.jpg';
</script>

<svelte:head>
	<title>Juwelier Kappelmeier - Ihr Schmuck- und Uhren-Fachhändler in Regensburg seit 1846</title>
</svelte:head>

<img
	class="min-w-screen -z-1 fixed left-1/2 top-1/2 block aspect-square min-h-screen -translate-x-1/4 -translate-y-1/2 overflow-hidden rounded-full opacity-40 blur-md"
	src={introImg}
	alt="Janine und Siegfried Schweizer beim Tango"
/>

<section class="relative mx-auto my-20 flex w-full max-w-5xl flex-col-reverse px-4">
	<article class="flex-0 -mt-16 rounded-sm bg-stone-900 bg-opacity-70 px-8 py-24 lg:-mt-24">
		<header class="mx-auto mb-8 max-w-prose font-serif text-base md:text-lg">
			<time class="block text-right font-sans">01. August 2020</time>
			<h1 class="my-12 font-sans text-4xl font-light leading-tight text-green-300 md:text-5xl">
				<span class="whitespace-nowrap">Tradition geht,</span>
				<span class="whitespace-nowrap">Werte bleiben</span>
			</h1>
		</header>
		<div class="font-serif text-base md:text-lg">
			<p class="mx-auto mb-6 max-w-prose leading-normal">
				Seit Generationen gehört Juwelier Kappelmeier zu Regensburg wie die Wurstkuchl zur
				Steinernen Brücke. Heute führen Janine und Siegfried Schweizer seit 1986 das renommierte
				Geschäft am Neupfarrplatz.
			</p>

			<p class="mx-auto mb-6 max-w-prose leading-normal">
				Unter Stammkunden hat es sich schon herum&shy;gesprochen: Zum Jahreswechsel werden die
				beiden in den Ruhestand gehen. „Siegfried und ich haben uns der gemeinsamen Leidenschaft für
				schönen Schmuck wegen auf der Goldschmiedeakademie in Pforzheim kennen- und lieben gelernt,“
				plaudert Janine aus dem Nähkästchen. „Jedes unserer vier Kinder findet seine Erfüllung im
				Leben in einem anderen Metier. Jetzt wird es auch für uns Zeit, unsere Work-Life-Balance neu
				auszutarieren.“ Die inzwischen schon vier Enkelkinder werden die Schweizers sicher auf
				erfrischende Weise neu herausfordern. Im Tangotanz finden sie seit Jahren ja schon immer
				wieder neu zueinander.
			</p>

			<img
				class="my-8 block border-4 border-stone-200 lg:my-16 lg:border-8"
				src={kappelmeier9924Img}
				alt="Janine und Siegfried Schweizer"
			/>

			<p class="mx-auto mb-6 max-w-prose leading-normal">
				Wie viele tausend Paare hat Kappelmeier schon mit individuell gefertigten Eheringen
				begleitet? Niemand kann es genau sagen. Man erzählt sich, dass die Beziehungen besonders
				haltbar wären. Wohl kaum eine Regensburgerin hat sich nicht die Nase an den Schaufenstern
				mit den handgemachten Schmuckstücken, kaum ein Regensburger an jenen mit den feinen Uhren
				aus Schweizer und deutschen Manufakturen platt gedrückt. Und wer Expertise beim Kauf
				kostbarer Brillanten und anderer Edelsteine sucht, für den sind oft die Juweliere am
				Neupfarrplatz die Adresse des Vertrauens.
			</p>

			<img
				class="my-8 block border-4 border-stone-200 lg:my-16 lg:border-8"
				src={kappelmeier9876Img}
				alt="Janine und Siegfried Schweizer besprechen ein Schmuckstück"
			/>

			<p class="mx-auto mb-6 max-w-prose leading-normal">
				Uns freut, dass Janine und Siegfried Schweizer bis heute nichts von ihrer Lust an kreativem
				Handwerk und hoher Uhrmacherkunst eingebüßt haben. Sie und ihr erfahrenes, fachkundiges Team
				freuen sich darauf, in diesem Jahr noch viele Menschen glücklich zu machen. Mit besonderen
				Angeboten auf ausgewählte Schmuckstücke und großzügigem Abschiedsrabatt auf alle Uhren wird
				ihnen das ganz sicher gelingen.
			</p>
		</div>
	</article>
	<img
		class="mx-auto block aspect-square w-full max-w-3xl flex-1 overflow-hidden rounded-full"
		src={introImg}
		alt="Janine und Siegfried Schweizer beim Tango"
	/>
</section>
