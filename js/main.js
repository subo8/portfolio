const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const structure = document.querySelector('#structure')
const skills = document.querySelector('#skills')
const aboutContent = document.querySelector('#about-content')
const contactContent = document.querySelector('#contact-content')
const structureContent = document.querySelector('#structure-content')
const skillsContent = document.querySelector('#skills-content')

about.addEventListener('click', () => {
  const aboutBox = new WinBox({
    title: 'About Me',
    //modal: true,
    width: '600px',
    height: '300px',
    top: 20,
    right: 50,
    bottom: 50,
    left: 50,
    mount: aboutContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

contact.addEventListener('click', () => {
  const contactBox = new WinBox({
    title: 'Contact Me',
    background: '#00aa00',
    width: '400px',
    height: '720px',
    top: 50,
    right: 50,
    bottom: 50,
    left: 800,
    mount: contactContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

structure.addEventListener('click', () => {
  const structureBox = new WinBox({
    title: 'AWS Structure',
    background: '#00aa00',
    width: '660px',
    height: '500px',
    top: 400,
    right: 50,
    bottom: 50,
    left: 50,
    mount: structureContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

skills.addEventListener('click', () => {
  const skillsBox = new WinBox({
    title: 'Skills',
    background: '#00aa00',
    width: '860px',
    height: '500px',
    top: 200,
    right: 50,
    bottom: 50,
    left: 50,
    mount: skillsContent,
    onfocus: function () {
      this.setBackground('#00aa00')
    },
    onblur: function () {
      this.setBackground('#777')
    },
  })
})

// Typewriter.js
// https://github.com/ronv/Typewriter.js

$.fn.typewriter = function () {
  this.each(function () {
    var c = $(this),
      b = c.html(),
      a = 0,
      d = 0;
    c.html("");
    var e = function () {
      if ("<" == b.substring(a, a + 1)) {
        var f = new RegExp(/<span class="instant"/),
          g = new RegExp(/<span class="clear"/);
        if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
        else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
        else
          for (;
            ">" != b.substring(a, a + 1);) a++
      }
      c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
      a >= b.length || setTimeout(e, 70 + 100 *
        Math.random())
    };
    e()
  });
  return this
};
$(".terminal").typewriter();

$.fn.typewriter = function () {
  this.each(function () {
    var c = $(this),
      b = c.html(),
      a = 0,
      d = 0;
    c.html("");
    var e = function () {
      if ("<" == b.substring(a, a + 1)) {
        var f = new RegExp(/<span class="instant"/),
          g = new RegExp(/<span class="clear"/);
        if (b.substring(a, b.length).match(f)) a += b.substring(a, b.length).indexOf("</span>") + 7;
        else if (b.substring(a, b.length).match(g)) d = a, a += b.substring(a, b.length).indexOf("</span>") + 7;
        else
          for (;
            ">" != b.substring(a, a + 1);) a++
      }
      c.html(b.substring(d, a++) + (a & 1 ? "_" : ""));
      a >= b.length || setTimeout(e, 100 *
        Math.random())
    };
    e()
  });
  return this
};
$(".skills-terminal").typewriter();

toastSuccessOptions = {
  container: 'body',
  class: 'siiimpleToast',
  position: 'top|left',
  margin: 15,
  delay: 0,
  duration: 3000,
  style: { background: 'green' },
}

toastFailureOptions = {
  container: 'body',
  class: 'siiimpleToast',
  position: 'top|left',
  margin: 15,
  delay: 0,
  duration: 3000,
  style: { background: 'red' },
}

toastInputsOptions = {
  container: 'body',
  class: 'siiimpleToast',
  position: 'top|right',
  margin: 15,
  delay: 0,
  duration: 3000,
  style: { background: 'yellow', color: 'black' },
}



let sendData = {}
$("#submitButton").click(function (ev) {
  if (!$('#title').val() || !$('#email').val() || !$('#gname').val() || !$('#message').val()) {
    siiimpleToast.message('Need to fill * fields! 😈', toastInputsOptions);
  } else {
    sendData.MessageTitle = $('#title').val();
    sendData.Email = $('#email').val();
    sendData.GuestName = $('#gname').val();
    sendData.Phone = $('#phone').val();
    sendData.Message = $('#message').val();

    var url = 'https://921tu8teme.execute-api.us-east-1.amazonaws.com/v1/contact/';
    $.ajax({
      type: "POST",
      url: url,
      data: JSON.stringify(sendData),
      contentType: 'application/x-www-form-urlencoded',
      success: function (data) {
        siiimpleToast.message('Thank you! 😘', toastSuccessOptions);
      },
      error: function (data) {
        siiimpleToast.message('Oh no somehing bad happened! 😓', toastFailureOptions);
      }
    });
  }
});
