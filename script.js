document.addEventListener('DOMContentLoaded', () => {
    const ligaBtn = document.getElementById('ligaBtn');
    const volumeMais = document.getElementById('volumeMais');
    const volumeMenos = document.getElementById('volumeMenos');
    const globo = document.getElementById('globo');
    const volumeBar = document.querySelector('.volume-bar');

    let volume = 0;

    ligaBtn.addEventListener('click', () => {
        globo.style.display = globo.style.display === 'block' ? 'none' : 'block';
        updateVolumeBar();
    });

    volumeMais.addEventListener('click', () => {
        if (volume <10) {
            volume++;
            updateVolumeBar();
            setTimeout(() => {
                volumeBar.style.opacity = 0
            }, 4000);
        }
    });

    volumeMenos.addEventListener('click', () => {
        if (volume > 0) {
            volume--;
            updateVolumeBar();
            setTimeout(() => {
                volumeBar.style.opacity = 0
            }, 4000);
        }
    });

    function updateVolumeBar() {
        if (globo.style.display === 'block') {
            volumeBar.style.opacity = 1;
            const height = volume * 10;
            volumeBar.style.height = `${height}px`;
        } else {
            volumeBar.style.opacity = 0;
        }
    }
    function hideVolumeBarAfterDelay() {
        setTimeout(() => {
            volumeBar.style.opacity = 0;
        }, 4000);
    }
});