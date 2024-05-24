function buscarUltimoCorreo() {
  let query = "from:mailwin@winet.com.pe";
  var threads = GmailApp.search(query, 0, 1);
  var message = threads[0].getMessages()[0];
  var subject = message.getSubject();
  var body = message.getBody();
  var recipient = ["INGRESAR_EL_CORREO"];
  message.forward(recipient, {subject: subject, htmlBody: body});
}
