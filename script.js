function tampilkanData() {
    var name = document.forms["form"]["nama"].value;
    var nim = document.forms["form"]["NIM"].value;
    var prodi = document.forms["form"]["programstudi"].value;
    var email = document.forms["form"]["email"].value;
    var password = document.forms["form"]["password"].value;
    var jk = document.forms["form"]["gender"].value;
    var date = document.forms["form"]["date"].value;
    var alamat = document.forms["form"]["alamat"].value;

    if (name == "" || nim == "" || prodi == "" || email == "" || password == "" || jk == "" || date == "" || alamat == "") {
        alert("Isi Data yang ada");
        return false;
    }

    // document.getElementById("sender-full-name").innerText = name;
    // document.getElementById("sender-birth-date").innerText = tanggal;
    // document.getElementById("sender-gender").innerText = jk;
    // document.getElementById("sender-message").innerText = pesan;
    // return false;
    return false;
}