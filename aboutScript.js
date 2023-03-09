fetch('team.json')
  .then(response => response.json())
  .then(data => {
    const container = document.querySelector('.container');
    data.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('card');

      const front = document.createElement('div');
      front.classList.add('card__face', 'card__face--front');

      const header = document.createElement('div');
      header.classList.add('card__header');

      const name = document.createElement('div');
      name.classList.add('card__name');
      name.textContent = member.name;

      const lvl = document.createElement('div');
      lvl.classList.add('card__lvl');
      lvl.textContent = `Lv. ${member.lvl}`;

      const hp = document.createElement('div');
      hp.classList.add('card__hp');
      hp.textContent = `HP ${member.hp}`;

      const image = document.createElement('div');
      image.classList.add('card__image');
      const img = document.createElement('img');
      img.src = member.image;
      img.alt = member.name;
      image.appendChild(img);

      header.appendChild(name);
      header.appendChild(lvl);
      header.appendChild(hp);

      front.appendChild(header);
      front.appendChild(image);

      const back = document.createElement('div');
      back.classList.add('card__face', 'card__face--back');

      const description = document.createElement('div');
      description.classList.add('card__description');
      description.textContent = member.description;

      back.appendChild(description);

      card.appendChild(front);
      card.appendChild(back);

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error fetching team data:', error);
  });