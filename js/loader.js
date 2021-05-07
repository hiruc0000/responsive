(() => {
  const loader = document.querySelector('.loader');
  if(loader.classList.contains('loaded')){
    loader.classList.remove('loaded');
  }

  // window.onload = () => {
  //     hideLoader();
  // }

  // ローダーを見せるために3秒の待機時間設定
  setTimeout(hideLoader, 3000);

  function hideLoader() {
    loader.classList.add('loaded');
  }
})();
