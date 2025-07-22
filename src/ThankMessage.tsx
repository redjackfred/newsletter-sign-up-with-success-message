import CheckIcon from "/src/assets/images/icon-success.svg";

export default function ThankMessage({
	email,
	handleClick,
}: {
	email: string;
	handleClick: () => void;
}) {
	return (
		<div className="flex min-h-screen flex-col bg-white px-6 pt-[149px] pb-[70px] md:min-h-[520px] md:w-[504px] md:rounded-4xl md:px-[64px] md:py-[60px]">
			<div className="flex flex-col gap-8 md:w-[376px]">
				<img src={CheckIcon} className="h-16 w-16" alt="Success Icon" />
				<h1 className="text-preset-1">Thanks for subscribing!</h1>
				<p className="text-preset-2-regular text-blue-800">
					A confirmation email has been sent to <b>{email}</b>. Please open it
					and click the button inside to confirm your subscription
				</p>
			</div>
			<button
				className="text-preset-2 mt-[263px] h-14 rounded-lg bg-blue-800 text-white md:mt-[32px]"
				onClick={handleClick}
			>
				Dismiss message
			</button>
		</div>
	);
}
