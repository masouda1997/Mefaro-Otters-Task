import React from "react";

const Article = () => {
	return (
		<div className="flex flex-col gap-1">
			<span className="text-white self-end text-sm">
				THE MAN - MADE ENVIRONMENT📌
			</span>
			<article className="bg-white p-5 text-sm">
				<p>
					سلام
					<br /> به مسیر یادگیری متوسط آیلتس خوش اومدید
				</p>
				<br />
				<p>
					در این درس به کمک ده درسنامه و 50 ،تمرین با هم به یادگیری در
					مورد محیط های ساخته شده توسط بشر می پردازیم و به همین بهانه
					مهارتهای چهارگانه خودمون شامل : Reading writing , Listening,
					speaking رو تقویت می کنیم . <br />
				</p>
				<p>
					<br />
					تو متن زیر میتونید اهداف یادگیری این درس رو مشاهده کنید.
					<br />
				</p>
				<p>
					<span className="block py-4"> نکته مهم</span>
					برای مطالعه دروس ابتدا منبع یک به علاوه جزوه یک ادر صورت
					وجود جزوه برای درس رو مطالعه کنید و بعد از مطالعه این موارد
					تمرین درس رو حل کنید. در صورتی که مشکلی در حل تمارین داشتید
					یا نیاز به تثبیت مطالب داشتید سراغ منبع دو یا جزوه دو برند،
					به علاوه بعضی سرفصل ها به درسنامه نیاز نداره و فقط تمرین
					داره که برای شما مشخص شده <br />
					موفق باشید
				</p>

				<section dir="ltr">
					IN THIS UNIT YOU WILL LEARN HOW TO: <br />
					<span className="block py-4">Reading</span>
					<ul className="list-disc pl-5">
						<li>
							skim a text quickly to understand the general idea
						</li>
						<li>
							scan a text for specific information to answer
							short- answer questions
						</li>
						<li>
							use skimming and scanning to locate the answer
							quickly
						</li>
						<li> understand and produce paraphrasing</li>
						<li>
							use the present continuous and present simple.
							correctly
						</li>
					</ul>
					<span className="block py-4">Writing</span>
					<ul className="list-disc pl-5">
						<li>
							select key features of different types of graph,
							chart and table in order to describe them accurately
						</li>
						<li>
							use suitable verbs, adjectives and adverbs to
							describe trends in different ways
						</li>
						<li>
							compare different graphs or information in the same
							graph and write a summary of the main features.
						</li>
					</ul>
					<span className="block py-4">Listening</span>
					<ul className="list-disc pl-5">
						<li>
							predict the type of information required for short-
							answer questions
						</li>
						<li>
							listen for specific information (e.g. complex
							numbers,
						</li>
						<li>
							{" "}
							difficult spellings and write it down correctly
						</li>
						<li> listen to understand context</li>
						<li>answer</li>
						<li>
							multiple choice questions correctly by eliminating
							distractors
						</li>
					</ul>
					<span className="block py-4">Speaking</span>
					<ul className="list-disc pl-5">
						<li>
							speak about various aspects of where you live for
							speaking Part 1
						</li>
						<li>respond to wh, would and Yes/No questions about</li>
						<li> where you live</li>
						<li>
							prepare more information for common Speaking Part 1
						</li>
						<li>topics</li>
						<li> use syllable stress in words correctly</li>
					</ul>
				</section>
			</article>
		</div>
	);
};

export default Article;
