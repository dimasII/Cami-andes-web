/** Auras suaves y animadas para dar profundidad al fondo de las páginas interiores. */
export default function FondoAura() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="aura aura-1" />
      <div className="aura aura-2" />
    </div>
  );
}
