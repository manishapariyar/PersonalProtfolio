import { motion } from "framer-motion";
import Htext from "../../shared/Htext";
import { SelectedPage } from "../../shared/types";
import { useForm } from "react-hook-form";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const ContactMe = ({ setSelectedPage }: Props) => {
  const inputStyles = `border-2 hover:border-bodyColor mt-5 w-full rounded-lg bg-stale-200 px-5 py-3 placeholder-black`
  const {
    register,
    trigger,
    formState: { errors }

  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  }

  return (
    <section id="contact" className="mx-auto w-5/6 pt-4 pb-4 mt-4">
      <Htext> Contact me / <span className="text-xl text-green-300">"सम्पर्क गर्नुहोस्"</span></Htext>
      <motion.div className="mt-4 basis-3/5 md:mt-0"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 100 },
          visible: { opacity: 1, y: 0 }
        }}>
        <form
          onSubmit={onSubmit}
          method="POST"
          action="https://formsubmit.co/manishapariyar196@gmail.com"
          acceptCharset="UTF-8"
        >
          <input type="hidden" name="_replyto" value="" />
          <input type="hidden" name="_subject" value="New form submission" />
          <input type="text"
            className={inputStyles}
            placeholder="NAME" {...register("name", {
              required: true,
              maxLength: 100,
            })} />
          {errors.name && (
            <p className="mt-1 text-primary-500">
              {errors.name.type === "required" && "This Field is required."}
              {errors.name.type === "maxLength" && "Max length is 100 characters."}
            </p>
          )}
          <input type="email"
            className={inputStyles}
            placeholder="EMAIL"
            {...register("email", {
              required: true,
              pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
            })} />
          {errors.email && (
            <p className="mt-1 text-red-400 ">
              {errors.email.type === "required" && "This Field is required."}
              {errors.email.type === "pattern" && "Invalid email."}
            </p>
          )}

          <textarea
            className={inputStyles}
            rows={4}
            cols={50}
            placeholder="MESSAGE"
            {...register("message", {
              required: true,
              maxLength: 2000,
            })} />
          {errors.message && (
            <p className="mt-1 text-primary-500">
              {errors.message.type === "required" && "This Field is required."}
              {errors.message.type === "maxLength" && "Max length is 2000 characters."}
            </p>
          )}
          <button type="submit"
            className="mb-5 mt-2 rounded-lg bg-green-400
              text-white text-xl
               px-10 py-2 transition duration-500 border-2 hover:border-bodyColor
                hover:bg-primary-500 hover:text-white text-l"
          >SUBMIT</button>
        </form>
      </motion.div>
    </section>
  )
}

export default ContactMe;
