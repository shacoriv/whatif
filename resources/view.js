function blur() {
  $('#footer').blur();
}

function button() {
  $('#footer').click(blur);
}

$(document).ready(button);
