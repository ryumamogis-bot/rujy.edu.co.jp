function getAddress() {
  if (!navigator.geolocation) {
    alert("位置情報が使えません");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    async function (position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;

      const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`;

      const response = await fetch(url);
      const data = await response.json();

      localStorage.setItem("savedAddress", data.display_name);

      if (document.getElementById("result")) {
        document.getElementById("result").textContent = data.display_name;
      }

      if (typeof showMap === "function") {
        showMap(lat, lon);
      }
    }
  );
}
