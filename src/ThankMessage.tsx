import CheckIcon from "/src/assets/images/icon-success.svg";

export default function ThankMessage({
	email,
	handleClick,
}: {
	email: string;
	handleClick: () => void;
}) {
	return (
		<div className="flex min-h-screen flex-col bg-white px-6 pt-[149px] pb-[70px]">
			<div className="flex flex-col gap-8">
				<img src={CheckIcon} className="h-16 w-16" alt="Success Icon" />
				<h1 className="text-preset-1-mobile">Thanks for subscribing!</h1>
				<p className="text-preset-2-regular text-blue-800">
					A confirmation email has been sent to {email}. Please open it and
					click the button inside to confirm your subscription
				</p>
			</div>
			<button
				className="mt-[263px] h-14 rounded-lg bg-blue-800 text-white"
				onClick={handleClick}
			>
				Dismiss message
			</button>
		</div>
	);
}
