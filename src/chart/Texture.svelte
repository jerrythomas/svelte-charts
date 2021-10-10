<script>
	export let id
	export let fill
	export let path
	export let contrast
	export let thickness = 0.5
	export let patternUnits = 'userSpaceOnUse'
	export let size = 10
	export let angle = 0

	$: transform = `rotate(${angle},5,5)`
</script>

<pattern {id} {patternUnits} width={size} height={size}>
	<rect width={size} height={size} {fill} />

	<path
		d={path}
		fill="none"
		stroke={contrast}
		stroke-width={thickness}
		{transform}
	/>
</pattern>
