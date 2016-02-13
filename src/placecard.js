function createSide(name) {
  return $('<div class="side">' + (name || '') + '</div>');
}

function createCard(name) {
  return $('<div class="card"></div>')
    .append(createSide())
    .append(createSide(name));
}

function createPage() {
  return $('<div class="a4 page"></div>');
}

function getNames() {
  return $('#name_input').val().split('\n').map(function(name) {
    return name.trim();
  });
}

function update() {
  var names = getNames();
  console.debug('Creating cards for', names.length, 'names...');

  var container = $('#cards');
  container.empty();

  var page = null;
  names.forEach(function(name, index) {
    if (index % 6 === 0) {
      page = createPage().appendTo(container);
    }
    page.append(createCard(name));
  });

  var extra = names.length % 6 ? 6 - names.length % 6 : 0;
  console.debug('Adding', extra, 'extra cards...');
  while (extra > 0) {
    page.append(createCard(''));
    extra--;
  }
}
