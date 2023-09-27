import { OpenAIChat } from 'langchain/llms/openai';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

// 環境変数
const OPEN_AI_API_KEY='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';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent {

  resultRecipe = "";

  // コンストラクタ
  constructor() {}

  // 初期処理
  ngOnInit(): void {}

  //
  searchForm = new FormGroup({
    inputFood: new FormControl('', []),
  });

  onSubmit() {
    let parse_data = JSON.parse(JSON.stringify(this.searchForm.value));
    const model = new OpenAIChat({openAIApiKey: OPEN_AI_API_KEY, modelName: "gpt-3.5-turbo"});
    const asyncFunc = async () => {
      const question = `今日の献立を教えてください。材料は: ${parse_data.inputFood}です`
      this.resultRecipe = `検索中です！少々お待ちください！`;
      const res = await model.call(question);
      console.log(res);
      this.resultRecipe = `オススメのレシピは${res}です！`;
    }
    asyncFunc();
  };
}
