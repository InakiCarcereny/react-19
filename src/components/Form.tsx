export function Form() {
  return (
    <>
      {/* Carga asincrona del css, solo lo carga cuando se cargue el componente */}

      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/@picocss/pico@2/css/pico.min.css"
      ></link>

      <form>
        <input type="text" name="name" placeholder="Name" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
