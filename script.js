function toggle(){
  const theme =
    document.body.className === 'dark' ? 'light' : 'dark';
  document.body.className = theme;
  localStorage.setItem('theme', theme);
}

const saved = localStorage.getItem('theme');
if(saved){
  document.body.className = saved;
}else{
  document.body.className = 'dark';
}
