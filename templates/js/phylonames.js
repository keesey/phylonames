var RANDOM_IMAGE_FILENAMES = ["allaudia1", "allaudia2", "bagge", 'baobab', 'chameleon', 'cicada', 'clitoria', 'dicranostigma-franchetianum', 'gecko', 'kaktus', 'larva', 'leaves', 'linaria', 'millipede', 'sinorchis1', 'snoken', 'spider', 'spider2', 'vit'];

function befuddle_epadr(n, d)
{
	document.write('<a href="mailto:' + n + '@' + d + '">' + n + '@' + d + '</a>');
}

$(window).ready(function()
{
	var names = RANDOM_IMAGE_FILENAMES,
		n = names[Math.floor(Math.random() * names.length)];
	document.querySelector('style').textContent += '@media screen and (min-width:768px){body{background-image: url("/images/random/' + n + '.jpg")}}';
});