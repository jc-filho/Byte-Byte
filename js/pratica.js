function executarCodigo() {
    const html = document.getElementById("html-code").value;
    const css = `<style>${document.getElementById("css-code").value}</style>`;
    const js = `<script>${document.getElementById("js-code").value}<\/script>`;
    const output = document.getElementById("output").contentWindow.document;

    output.open();
    output.write(html + css + js);
    output.close();
}
