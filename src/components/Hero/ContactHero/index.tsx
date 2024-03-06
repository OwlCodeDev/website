import { ChangeEvent, RefObject, useRef, useState } from "react";
import ReCaptcha, { ReCAPTCHA } from "react-google-recaptcha";

const FORM_DEFAULT: {
  [key: string]: string;
} = {
  fullName: "",
  lastName: "",
  email: "",
  tel: "",
  activity: "",
  captchaToken: "",
};

function ContactHero() {
  const [formData, setFormData] = useState(FORM_DEFAULT);
  const [loading, setLoading] = useState(false);
  const recaptcha: RefObject<ReCAPTCHA> = useRef(null);
  const [error, setError] = useState("");

  const handleActivityChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setFormData({ ...formData, activity: event.target.value });
  };

  const resetForm = () => {
    setFormData(FORM_DEFAULT);
    setError("");
    if (recaptcha.current) {
      recaptcha.current.reset();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    console.log(formData);

    if (!formData.fullName || !formData.email || !formData.tel) {
      setError("Por favor, preencha todos os campos.");
    }

    if (!formData.captchaToken) {
      setError("Por favor, confirme que você não é um robô.");
    }

    const response = await fetch(
      "https://contaqi.com.br/api/enviar-email-owlcode",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    if (response.ok) {
      // toastSuccess("Email enviado com sucesso!");
      resetForm();
    } else {
      // toastError("Erro ao enviar email");
    }
    setLoading(false);
  };
  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatarTelefone(e.target.value);
    setFormData({ ...formData, tel: formattedPhone });
  };

  const formatarTelefone = (input: string) => {
    const inputNumerico = input.replace(/\D/g, "");
    const part1 = inputNumerico.slice(0, 2);
    const part2 = inputNumerico.slice(2, 7);
    const part3 = inputNumerico.slice(7, 11);

    if (inputNumerico.length > 2 && inputNumerico.length <= 7) {
      return `(${part1}) ${part2}`;
    } else if (inputNumerico.length > 7) {
      return `(${part1}) ${part2}-${part3}`;
    } else {
      return inputNumerico;
    }
  };

  const handleCaptchaChange = (value: string | null) => {
    setFormData({ ...formData, captchaToken: value || "" });
  };

  return (
    <section id="contactHero">
      <div className="hero min-h-screen">
        <div className="hero-content flex-col">
          <div className="border-primary rounded border-2 w-full flex flex-col items-center">
            <div className="relative -top-10 pb-20 bg-base-100 w-3/4 flex flex-col items-center text-center">
              <h1 className="text-4xl">Entre em contato hoje mesmo</h1>
              <h1 className="text-4xl font-bold text-primary">
                E descubra como podemos te ajudar
              </h1>
            </div>
          </div>
          <div className="card w-5/6 bg-base-200/50 backdrop-blur-3xl text-primary-content relative -top-20 ">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold dark:text-white">
                  Estamos a sua espera
                </h1>
                <p className="py-6 dark:text-white">
                  Nossa equipe dedicada está pronta para ouvir suas necessidades
                  e oferecer soluções sob medida para impulsionar o sucesso de
                  seu negócio. Seja para discutir um novo projeto, esclarecer
                  dúvidas ou simplesmente para nos conhecer melhor, estamos aqui
                  para ajudar. Não hesite em nos contatar - estamos ansiosos
                  para colaborar com você!
                </p>
              </div>
              <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body" onSubmit={handleSubmit}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Nome Completo</span>
                    </label>
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={(e) => {
                        setFormData({ ...formData, fullName: e.target.value });
                      }}
                      placeholder="Digite seu nome"
                      className="input input-bordered dark:text-white"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                      }}
                      placeholder="email"
                      className="input input-bordered dark:text-white"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Telefone</span>
                    </label>
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.tel}
                      onChange={handleTelefoneChange}
                      placeholder="Telefone com DDD"
                      className="input input-bordered dark:text-white"
                      required
                    />
                  </div>
                  <ReCaptcha
                    ref={recaptcha}
                    sitekey={"6LcEWY8pAAAAAFMRq2v8TPzRM1_0VqapAyTdREXK"}
                    onChange={handleCaptchaChange}
                  />
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">
                      Enviar
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactHero;
