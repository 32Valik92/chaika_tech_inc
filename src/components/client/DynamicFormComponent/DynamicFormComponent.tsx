"use client";
import "./DynamicFormComponent.css";
import "@/css/common.css";

import {useRouter} from "next/navigation";
import {SubmitHandler, useForm} from "react-hook-form";

interface FormData {
    word: string;
    criterion: string;
}

const DynamicFormComponent = () => {
   const router = useRouter();

   const {
      register,
      handleSubmit,
      watch,
   } = useForm<FormData>();

   const search: SubmitHandler<FormData> = ({word, criterion}) => {
      router.push(`/${word}/${criterion}`);
   };

   const wordInput = watch("word");

   return (
      <div className={"form-title-container mulish-mulish"}>
         <div className={"form-title"}>Welcome to words API</div>
         <div className={"form-container"}>
            <form onSubmit={handleSubmit(search)} className={"form-container-search-form"}>
               <input type="text" placeholder="Write a search word..." {...register("word")}
                  className={"mulish-mulish"}/>

               <select {...register("criterion")} className={"mulish-mulish"}>
                  <option value="antonyms">Antonyms</option>
                  <option value="definitions">Definitions</option>
                  <option value="examples">Examples</option>
                  <option value="rhymes">Rhymes</option>
                  <option value="syllables">Syllables</option>
                  <option value="synonyms">Synonyms</option>
               </select>

               <button
                  type="submit"
                  className={"search-button mulish-mulish"}
                  disabled={!wordInput}
               >Search
               </button>
            </form>
         </div>
      </div>
   );
};

export {DynamicFormComponent};
