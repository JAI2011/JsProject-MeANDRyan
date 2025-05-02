

function nameanalizer() {
  const name = document.getElementById('name').value;
  if (typeof name !== 'string') {
    alert('Please enter a valid name.');
    return;
  
  }

  document.body.style.backgroundImage = `url('${name}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
  document.body.style.backgroundRepeat = 'no-repeat';
}

