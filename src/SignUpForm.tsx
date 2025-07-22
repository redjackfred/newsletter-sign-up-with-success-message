import { useState } from "react";
import IllustrationMobile from "/src/assets/images/illustration-sign-up-mobile.svg";
import IllustrationTablet from "/src/assets/images/illustration-sign-up-tablet.svg";
import IllustrationDesktop from "/src/assets/images/illustration-sign-up-desktop.svg";
import ListIcon from "/src/assets/images/icon-list.svg";
import * as z from "zod";

const Email = z.object({
	email: z.string().email(""),
});

export default function SignUpForm({
	successSubmit,
}: {
	successSubmit: () => void;
}) {
	const [email, setEmail] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [errors, setErrors] = useState<string | null>(null);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const validatedEmail = Email.parse({ email });
			console.log("Email submitted:", validatedEmail.email);
			successSubmit();
		} catch (error) {
			if (error instanceof z.ZodError) {
				error.issues;
				setErrors(error.issues[0].message);
				console.error("Validation error:", error.issues[0].message);
			}
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
		if (errors) {
			setErrors(() => null);
		}
	};

	return (
		<form
			className="novalidate relative min-h-screen w-full gap-10 bg-white px-6 md:min-h-[878px] md:w-[608px] md:rounded-[36px] md:px-10 md:py-[42.86px] xl:flex xl:h-fit xl:min-h-0 xl:w-fit xl:flex-row-reverse xl:items-center xl:gap-16 xl:px-8 xl:py-6"
			onSubmit={handleSubmit}
		>
			<img
				src={IllustrationMobile}
				className="absolute inset-0 h-[284px] object-cover md:hidden"
			/>
			<img
				src={IllustrationTablet}
				className="relative hidden h-[358px] w-full rounded-2xl md:block xl:hidden"
			/>
			<img
				src={IllustrationDesktop}
				className="relative hidden h-[593px] w-[400px] rounded-2xl xl:block"
			/>
			<div className="relative top-[324px] md:top-10 xl:top-0 xl:w-[376px]">
				<section className="flex flex-col gap-6 xl:gap-8">
					<h1 className="text-preset-1 text-blue-800">Stay updated!</h1>
					<p className="text-preset-2-regular">
						Join 60,000+ product managers receiving monthly updates on:
					</p>
					<ul className="text-preset-2-regular flex flex-col gap-2 text-blue-800">
						<li className="flex items-start gap-4">
							<img src={ListIcon} className="flex-shrink-0"></img>Product
							discovery and building what matters
						</li>
						<li className="flex items-start gap-4">
							<img src={ListIcon} className="flex-shrink-0"></img>Measuring to
							ensure updates are a success
						</li>
						<li className="flex items-start gap-4">
							<img src={ListIcon} className="flex-shrink-0"></img>Measuring to
							And much more!
						</li>
					</ul>
				</section>
				<section className="mt-10 pb-[44px] md:mt-6 md:pb-[42.86px] xl:pb-0">
					<div className="flex items-center justify-between">
						<label htmlFor="email" className="text-preset-3 text-blue-800">
							Email address
						</label>
						{errors && <span className="text-preset-3 text-red">{errors}</span>}
					</div>
					<input
						type="text"
						id="email"
						name="email"
						placeholder="email@company.com"
						onChange={handleChange}
						className={`caret-grey text-preset-2-regular border-grey mt-2 w-full rounded-lg border px-6 py-4 focus:outline-none ${errors ? "border-red text-red focus:border-red bg-red-100" : "border-grey focus:border-1 focus:border-black"}`}
					/>
					<button
						type="submit"
						className={`text-preset-2 mt-6 w-full rounded-lg p-4 text-white ${email == "" ? "bg-blue-800" : "button-color"}`}
					>
						{isSubmitting
							? "Subscribing..."
							: "Subscribe to monthly newsletter"}
					</button>
				</section>
			</div>
		</form>
	);
}
