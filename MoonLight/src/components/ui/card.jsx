export default function Card({ title, right, children, className = '' }) {
return (
<section className={`rounded-2xl border border-gray-200 bg-white p-5 shadow-card ${className}`}>
{(title || right) && (
<div className="mb-4 flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">{title}</h2>
{right}
</div>
)}
{children}
</section>
)
}