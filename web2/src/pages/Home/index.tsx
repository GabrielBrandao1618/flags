export function Home(){
  return (
    <main className="flex flex-col h-screen items-center justify-center bg-gray-900">
		<div className="flex flex-col w-full max-w-[400px] bg-gray-800 rounded gap-2 p-4 box-border">
			<h1 className="text-white font-bold text-2xl w-full text-center">
				Bem vindo(a) ao jogo das bandeiras
			</h1>
			<p className="text-gray-200">
				Teste seus conhecimentos geográficos com esse simples jogo
			</p>
			<a 
				className="bg-black rounded text-white self-end text-xl px-2 py-1 font-bold block"
				href="/play"
			>
				Jogar
			</a>
		</div>
	</main>
  )
}