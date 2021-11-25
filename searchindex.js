Search.setIndex({docnames:["index","modules/base","modules/data_processors","modules/data_utils","modules/prompt_generator","modules/prompts","modules/root","modules/template","modules/trainer","modules/utils","modules/verbalizer","notes/configuration","notes/examples","notes/faq","notes/installation","notes/template","notes/verbalizer"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":4,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":3,"sphinx.domains.rst":2,"sphinx.domains.std":2,"sphinx.ext.intersphinx":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["index.rst","modules/base.rst","modules/data_processors.rst","modules/data_utils.rst","modules/prompt_generator.rst","modules/prompts.rst","modules/root.rst","modules/template.rst","modules/trainer.rst","modules/utils.rst","modules/verbalizer.rst","notes/configuration.rst","notes/examples.rst","notes/faq.rst","notes/installation.rst","notes/template.rst","notes/verbalizer.rst"],objects:{"openprompt.data_utils.conditional_generation_dataset":{WebNLGProcessor:[2,0,1,""]},"openprompt.data_utils.conditional_generation_dataset.WebNLGProcessor":{get_examples:[2,1,1,""]},"openprompt.data_utils.data_processor":{DataProcessor:[2,0,1,""]},"openprompt.data_utils.data_processor.DataProcessor":{get_dev_examples:[2,1,1,""],get_examples:[2,1,1,""],get_label_id:[2,1,1,""],get_labels:[2,1,1,""],get_num_labels:[2,1,1,""],get_test_examples:[2,1,1,""],get_train_examples:[2,1,1,""],get_unlabeled_examples:[2,1,1,""]},"openprompt.data_utils.data_sampler":{FewShotSampler:[3,0,1,""]},"openprompt.data_utils.data_sampler.FewShotSampler":{sample_per_label:[3,1,1,""],sample_total:[3,1,1,""]},"openprompt.data_utils.nli_dataset":{SNLIProcessor:[2,0,1,""]},"openprompt.data_utils.relation_classification_dataset":{ReTACREDProcessor:[2,0,1,""],SemEvalProcessor:[2,0,1,""],TACREDProcessor:[2,0,1,""],TACREVProcessor:[2,0,1,""]},"openprompt.data_utils.text_classification_dataset":{AgnewsProcessor:[2,0,1,""],DBpediaProcessor:[2,0,1,""],ImdbProcessor:[2,0,1,""],SST2Processor:[2,0,1,""]},"openprompt.data_utils.text_classification_dataset.AgnewsProcessor":{get_examples:[2,1,1,""]},"openprompt.data_utils.text_classification_dataset.DBpediaProcessor":{get_examples:[2,1,1,""]},"openprompt.data_utils.text_classification_dataset.ImdbProcessor":{get_examples:[2,1,1,""]},"openprompt.data_utils.text_classification_dataset.SST2Processor":{get_examples:[2,1,1,""]},"openprompt.data_utils.typing_dataset":{FewNERDProcessor:[2,0,1,""]},"openprompt.lm_bff_trainer":{LMBFFClassificationRunner:[8,0,1,""]},"openprompt.lm_bff_trainer.LMBFFClassificationRunner":{run:[8,1,1,""]},"openprompt.pipeline_base":{PromptDataLoader:[1,0,1,""],PromptForClassification:[1,0,1,""],PromptForGeneration:[1,0,1,""],PromptModel:[1,0,1,""]},"openprompt.pipeline_base.PromptDataLoader":{tokenize:[1,1,1,""],wrap:[1,1,1,""]},"openprompt.pipeline_base.PromptForClassification":{deparallelize:[1,1,1,""],device:[1,2,1,""],extract_at_mask:[1,1,1,""],forward:[1,1,1,""],load_state_dict:[1,1,1,""],parallelize:[1,1,1,""],state_dict:[1,1,1,""],tokenizer:[1,2,1,""]},"openprompt.pipeline_base.PromptForGeneration":{deparallelize:[1,1,1,""],forward:[1,1,1,""],generate:[1,1,1,""],load_state_dict:[1,1,1,""],parallelize:[1,1,1,""],post_processing:[1,1,1,""],prepare_inputs_for_generation:[1,1,1,""],shift_logits_and_labels:[1,1,1,""],state_dict:[1,1,1,""]},"openprompt.pipeline_base.PromptModel":{forward:[1,1,1,""],prepare_model_inputs:[1,1,1,""],train:[1,1,1,""]},"openprompt.prompt_base":{Template:[6,0,1,"id0"],Verbalizer:[6,0,1,""]},"openprompt.prompt_base.Template":{from_config:[6,1,1,"id15"],from_file:[6,1,1,"id14"],get_default_loss_ids:[6,1,1,"id2"],get_default_shortenable_ids:[6,1,1,"id3"],get_default_soft_token_ids:[6,1,1,"id4"],incorporate_text_example:[6,1,1,"id5"],on_text_set:[6,1,1,"id13"],parse_text:[6,1,1,"id6"],post_processing_outputs:[6,1,1,"id9"],process_batch:[6,1,1,"id8"],registered_inputflag_names:[6,4,1,"id1"],safe_on_text_set:[6,1,1,"id12"],save:[6,1,1,"id10"],text:[6,2,1,"id11"],training:[6,4,1,"id16"],wrap_one_example:[6,1,1,"id7"]},"openprompt.prompt_base.Verbalizer":{aggregate:[6,1,1,""],from_config:[6,1,1,""],from_file:[6,1,1,""],gather_outputs:[6,1,1,""],generate_parameters:[6,1,1,""],handle_multi_token:[6,1,1,""],label_words:[6,2,1,""],normalize:[6,1,1,""],on_label_words_set:[6,1,1,""],process_outputs:[6,1,1,""],project:[6,1,1,""],register_calibrate_logits:[6,1,1,""],safe_on_label_words_set:[6,1,1,""],training:[6,4,1,""],vocab:[6,2,1,""],vocab_size:[6,2,1,""]},"openprompt.prompts":{RobertaVerbalizerGenerator:[4,0,1,""],T5TemplateGenerator:[4,0,1,""],TemplateGenerator:[4,0,1,""],VerbalizerGenerator:[4,0,1,""]},"openprompt.prompts.RobertaVerbalizerGenerator":{invalid_label_word:[4,1,1,""],post_process:[4,1,1,""]},"openprompt.prompts.T5TemplateGenerator":{convert_template:[4,1,1,""],get_part_token_id:[4,1,1,""]},"openprompt.prompts.TemplateGenerator":{convert_template:[4,1,1,""],device:[4,2,1,""],from_config:[4,1,1,""],generate:[4,1,1,""],get_part_token_id:[4,1,1,""]},"openprompt.prompts.VerbalizerGenerator":{from_config:[4,1,1,""],generate:[4,1,1,""],invalid_label_word:[4,1,1,""],post_process:[4,1,1,""]},"openprompt.prompts.automatic_verbalizer":{AutomaticVerbalizer:[10,0,1,""]},"openprompt.prompts.automatic_verbalizer.AutomaticVerbalizer":{from_file:[10,1,1,""],optimize_to_initialize:[10,1,1,""],project:[10,1,1,""],register_buffer:[10,1,1,""]},"openprompt.prompts.knowledgeable_verbalizer":{KnowledgeableVerbalizer:[10,0,1,""]},"openprompt.prompts.knowledgeable_verbalizer.KnowledgeableVerbalizer":{add_prefix:[10,1,1,""],aggregate:[10,1,1,""],from_file:[10,1,1,""],generate_parameters:[10,1,1,""],on_label_words_set:[10,1,1,""],project:[10,1,1,""],register_calibrate_logits:[10,1,1,""]},"openprompt.prompts.manual_template":{ManualTemplate:[7,0,1,""]},"openprompt.prompts.manual_template.ManualTemplate":{on_text_set:[7,1,1,""]},"openprompt.prompts.manual_verbalizer":{ManualVerbalizer:[10,0,1,""]},"openprompt.prompts.manual_verbalizer.ManualVerbalizer":{add_prefix:[10,1,1,""],aggregate:[10,1,1,""],calibrate:[10,1,1,""],generate_parameters:[10,1,1,""],normalize:[10,1,1,""],on_label_words_set:[10,1,1,""],process_logits:[10,1,1,""],project:[10,1,1,""]},"openprompt.prompts.one2one_verbalizer":{One2oneVerbalizer:[10,0,1,""]},"openprompt.prompts.one2one_verbalizer.One2oneVerbalizer":{add_prefix:[10,1,1,""],calibrate:[10,1,1,""],generate_parameters:[10,1,1,""],normalize:[10,1,1,""],on_label_words_set:[10,1,1,""],process_logits:[10,1,1,""],project:[10,1,1,""]},"openprompt.prompts.prefix_tuning_template":{PrefixTuningTemplate:[7,0,1,""]},"openprompt.prompts.prefix_tuning_template.PrefixTuningTemplate":{generate_parameters:[7,1,1,""],on_text_set:[7,1,1,""],process_batch:[7,1,1,""],wrap_one_example:[7,1,1,""]},"openprompt.prompts.ptr_prompts":{PTRTemplate:[7,0,1,""],PTRVerbalizer:[10,0,1,""]},"openprompt.prompts.ptr_prompts.PTRVerbalizer":{on_label_words_set:[10,1,1,""],process_logits:[10,1,1,""]},"openprompt.prompts.ptuning_prompts":{PtuningTemplate:[7,0,1,""]},"openprompt.prompts.ptuning_prompts.PtuningTemplate":{generate_parameters:[7,1,1,""],get_default_soft_token_ids:[7,1,1,""],on_text_set:[7,1,1,""],process_batch:[7,1,1,""]},"openprompt.trainer":{ClassificationRunner:[8,0,1,""],GenerationRunner:[8,0,1,""]},"openprompt.trainer.ClassificationRunner":{configure_loss_function:[8,1,1,""]},"openprompt.utils":{calibrate:[9,3,0,"-"]},"openprompt.utils.calibrate":{calibrate:[9,5,1,""]},openprompt:{prompt_base:[6,3,0,"-"]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","property","Python property"],"3":["py","module","Python module"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:property","3":"py:module","4":"py:attribute","5":"py:function"},terms:{"0":[1,2,4,6,7,10,11,12,16],"0001":11,"0005":11,"01":11,"01998":0,"05":10,"1":[1,2,6,7,10,11,14,15],"10":11,"100":[1,4,11],"1000":[10,11],"10000":15,"11259":10,"120000":2,"123":11,"128":11,"13":2,"13418":2,"14":2,"1493":2,"15509":2,"15723":4,"16":2,"17":2,"18":2,"18025":2,"1821":2,"19":2,"1930":2,"19584":2,"19794":4,"2":[1,2,4,6,7,10,11],"20":4,"2010":2,"2012":4,"2015":2,"2017":2,"2020":[2,4,8],"2021":[0,2],"2105":10,"2111":0,"22354":4,"22631":2,"25000":2,"256":11,"2717":2,"3":[1,2,4,6,10,14],"30":2,"4":[2,10],"40":2,"41":2,"42":2,"456":11,"4928":2,"5":[2,7,10,11],"500":11,"512":[1,7],"549367":2,"560000":2,"58465":2,"6":10,"6507":2,"66":2,"68124":2,"6920":2,"7":10,"70000":2,"7600":2,"8":[2,14],"872":2,"9":14,"9824":2,"9842":2,"abstract":[1,2,4,6,15],"case":[1,6,8,12],"class":[0,2,3,6,7,8,10,11,12,15,16],"default":[0,1,2,4,6,7,8,10],"do":[1,6,7,10,12,14],"final":[1,2,6,10,15],"float":[7,10],"function":[0,1,6,7,8,10,11],"import":[2,3,7,10,12,15],"int":[1,2,3,4,6,7,10,11],"long":1,"new":[1,2,6,7,10,15],"return":[1,2,3,4,6,7,9,10],"static":[1,6,10],"true":[1,4,7,8,10,11,15],"try":15,"while":[1,6,8],A:[1,2,4,6,7,8,9,10,12,15],And:[1,11,14,15],As:[10,15],By:[1,4,6],For:[4,8,10,11,12,16],If:[0,2,3,4,10,11,15],In:[0,1,6,10,11,15],It:[1,2,4,6,7,12,15],No:1,Not:2,One:[0,8],That:[10,12],The:[1,2,3,4,6,7,8,10,11,12,16],There:[11,12],To:[1,6,10],Will:1,With:[1,6,12],_:4,__init__:[1,6],_forward:1,_texa:2,abc:2,abilen:2,abilene_regional_airport:2,abl:[1,6,7],about:[11,12,13],abov:[2,7],accord:[1,4,6],accum:10,acheiv:[1,6],achiev:10,across:1,actor:2,actual:[1,6,12],adapt:0,add:[1,6,10,15],add_prefix:10,address:2,adopt:10,advanc:[1,6,12],affect:1,after:[1,2,10],ag:2,again:[1,6],agenc:2,aggreg:[1,6,10],agnew:2,aim:[1,6],airplan:2,airport:2,al:[2,4,8],albert:[1,12],all:[1,2,4,6,10,11],allow:[1,4,6,7,10,16],along:[1,6,7],also:[0,2,8,12,15,16],also_sample_dev:[3,11],alt:2,alternate_nam:2,although:12,among:12,an:[0,1,2,3,6,7,9,10,15],anaconda:14,analysi:[2,12],ani:[1,2,4,6,10],annot:2,anoth:[8,12],antenna:2,api:[1,6,8,12],append:[1,6],appli:[3,8,10,15],applic:[2,12],appoint:[1,6,7,10],ar:[1,2,4,6,7,8,10,11,12,14,16],arg:1,argument:[1,6],arrai:2,art:2,articl:0,artist:2,arxiv:[0,4,10],ask:13,assert:2,astronomyth:2,athlet:[2,16],attack:2,attent:2,attribut:[1,6,7,11,12,15],author:[0,2],auto_v:8,automat:[0,4,8],automatic_verb:11,automaticverb:10,autoregress:12,awar:2,award:2,bachifi:8,bad:[12,16],badli:12,balanc:[1,10,11],base:[0,2,6,7,10,12],base_path:2,basic:[0,1,6,7,10,12,15],basotho:2,batch:[1,6,7,10,11],batch_siz:[1,6,10,11],batchifi:1,batchnorm:1,batchsiz:10,battl:2,beam:4,beam_width:4,beast:2,beauti:2,becaus:1,been:[1,12],befor:1,begin:[1,6,10],behavior:1,being:[1,6],bert:[1,12],best:11,better:[2,4,8,10],between:2,bff:[0,4],bia:11,binari:[2,15],biologyth:2,blank:2,block:7,bodiesofwat:2,book:10,bool:[1,3,4,6,7,10],both:[4,8],bowman:2,branch:10,brand:7,broadcast:[1,6,7],broadcastprogram:2,broken:2,build:[2,16],built:0,busi:[2,16],cacul:1,calcul:[1,6,9,10],calibr:[0,1,6,10],call:[1,2],callabl:8,can:[1,2,4,6,7,8,10,11,12,14,15,16],candid:[4,10],candidate_frac:10,candidate_num:4,cannot:4,car:2,categori:16,cater:2,caus:2,cause_of_death:2,cd:14,ce:10,certain:1,cfgnode:[1,4,6,8],chang:11,charact:2,charg:2,checkpoint:11,chemicalth:2,chen:0,children:2,choic:[1,6,10,11,16],choos:[11,12],citat:2,cite:0,cities_of_resid:2,city_of_birth:2,city_of_branch:2,city_of_death:2,city_of_headquart:2,cityserv:2,cl:1,classfiic:11,classif:[0,1,6,7,10,11,15],classification_manual_prompt:11,classificationrunn:8,classmethod:[1,4,6],classs:12,clean:11,cli:11,clone:14,code:[7,10,11],collect:2,com:14,combin:[1,10,12],combine_pattern:10,comma:[1,6,10,16],commerc:16,common:[1,6,7,10,11],compani:2,compat:12,competit:2,complex:15,complic:12,compon:2,composition:2,comput:10,condgen:2,condit:0,conditional_generation_dataset:2,conduct:[0,1,4,8,9,12,14],config:[1,4,6,8],config_default:11,config_yaml:11,configur:[0,1,2,6,7,8],configure_loss_funct:8,conflict:1,connect:10,consecut:16,consid:4,constitut:2,constraint:10,construct:8,contain:[1,2,4,6,7,9,10,11,15],content:[2,4],context:15,continu:[1,6],contradict:2,control:11,contuou:7,convent:2,convert:[4,7],convert_templ:4,copi:15,corpu:2,correspond:[1,2,4,10,11,15],could:[1,2,8,9,11,15],counterpart:4,countries_of_resid:2,country_of_birth:2,country_of_branch:2,country_of_death:2,country_of_headquart:2,creat:[11,14],cross:[2,10],cross_entropi:11,csv:[1,6,10,16],cuda_visible_devic:11,currenc:2,current:[1,4,6,7,10,11,12,14],custom:8,d:[1,6],data:[0,1,6,8,10,11,12,15],data_dir:2,data_load:12,data_util:[1,2,4,6,7,10,12],dataload:[8,9],dataparallel:7,dataprocessor:2,dataset:[1,2,3,4,8,10,12,16],dataset_nam:2,dataset_path:2,datasetobject:1,date_of_birth:2,date_of_death:2,dbpedia:2,decid:[1,4],decod:[1,4,7],decoder_max_length:[1,11],decoding_strategi:11,deep:2,defin:[1,7,10,15],denot:[1,6,15],deparallel:1,deploi:0,deriv:[1,6,11],descend:10,describ:2,descript:15,design:[1,4,6,7,8],desir:15,destin:2,detach:[1,6],detail:[1,6,10,11,12],determin:[10,11,12],dev:[2,3,11,12],dev_dataset:2,develop:[2,12,15],developen:11,devic:[1,4,11],device_map:1,dict:[1,6,7,8,10,15,16],differ:[10,11,12,15,16],dimens:[1,6],ding2021openprompt:0,ding:[0,2],diplomat:16,directli:[0,1,10,15],director:2,directori:11,disappoint:2,disast:2,discard:2,diseas:2,dissolv:2,distribut:[1,6,10],docker:14,document:1,doe:15,doesn:10,don:[1,6,10],done:12,down:[1,2,6,7,15],downstream:[0,4],dropout:[1,7],dummy_pt_object:1,duplic:15,dure:11,e1:2,e2:2,e:[1,4,6,7,9,10,11,15,16],each:[1,3,4,6,7,9,10,11,16],easi:15,easili:[1,12,15],educ:2,educationaldegre:2,effect:[1,2],einstein:12,either:1,elect:2,element:2,els:[1,6],embed:[1,6,7,15],employe:2,employee_of:2,empti:[1,6,10,16],encapsul:1,encod:[1,7],encourg:12,endless:[1,6],engin:16,enough:[3,10,15],ensembl:8,ensembletrain:10,entail:[2,15],enter:16,entir:[1,6,10],entiti:[0,15],entranc:11,entropi:10,environ:14,eo:1,epoch:[10,11],equal:4,equat:10,especi:16,essenc:12,establish:[1,6],et:[2,4,8],etc:[1,6,7,11],evalu:[1,2,11],event:2,everi:[1,4,6],everywher:[1,6],exampl:[0,1,2,4,6,7,9,10,11,15,16],except:1,expand:10,expect:[1,6],experi:11,explicit:16,explictli:[1,6,7],explor:12,express:15,extens:0,extern:10,extra:[1,6],extra_id_0:4,extra_id_:4,extract:[1,2],extract_at_mask:1,f1:11,fail:7,fals:[1,3,6,11,15],faq:0,fear:2,featur:[0,1,6],feder:2,few:[2,3,4,8,10,11],few_shot:11,few_shot_sampl:11,fewnerd:2,fewshot:0,fewshotsampl:3,file:[1,2,6,8,10,11],file_path:[11,16],file_util:[1,6],fill:[1,2,4,6,7],film:[2,12],filter:10,find:0,fine:2,firm:2,first:[1,2,6,8,10,11,12,15],firstli:1,fit:[1,6],fix:[1,6,10],flexibl:[0,1,12,15],floor:2,follow:[4,10,11,12],food:2,forbidden_word_id:4,forc:11,form:2,format:[1,6,7,10,16],forward:[1,7],found:2,founded_bi:2,four:10,framework:[0,1,10,11,15],freeli:8,freez:[1,11],freeze_para:11,freeze_plm:1,frequent:13,from:[0,1,2,4,6,7,10,11,12,15],from_config:[1,4,6],from_fil:[1,6,10,16],fromth:15,full:11,funni:2,further:10,futur:[0,14],g:[1,4,6,7,11,15,16],game:2,gao:[2,4,8],gather:[1,6],gather_output:[1,6],gear:2,gen_config:1,gen_max_length:11,gener:[0,1,6,7,10,11,12],generate_paramet:[1,6,7,10],generate_text_list:4,generated_sent:1,generation_kwarg:1,generation_util:1,generationmixin:1,generationrunn:8,get:[1,2,4,6,7,10,12,14],get_default_loss_id:[1,6],get_default_shortenable_id:[1,6],get_default_soft_token_id:[1,6,7],get_dev_exampl:2,get_exampl:2,get_label:2,get_label_id:2,get_model_class:12,get_num_label:2,get_part_token_id:4,get_test_exampl:2,get_train_exampl:2,get_unlabeled_exampl:2,git:14,give:10,given:[1,2,4,6,7,10,12],global:[1,6],go:1,god:2,good:[1,6,12,16],govern:[2,16],governmentag:2,gpe:2,gpt2:12,gpt:[1,7,12],gpu:[7,11],grad:10,gradient:10,grain:2,grammer:15,graph:[1,6],great:12,greater:10,greatest:[2,12],greedi:11,group:[1,6,7,16],guid:12,gymnast:16,ha:[1,2,6,7,10,16],hai:0,handl:[1,6,10],handle_multi_token:[1,6],hard:4,hasn:10,have:[1,2,4,6,7,10,12,15],head:[1,2,7,11],hendrickx:2,here:[2,4,11,12,15],heurist:4,hi:[2,12],highest:4,highwai:[2,16],hold:[1,6],holder:[1,6,7],hook:[1,6,7,10],horror:2,hors:2,hospit:2,hot:[1,6],hotel:[2,16],how:[0,1,6,10,12],howev:[7,10,11],http:[4,10,14],hu:0,huggingfac:[0,1,7,12,14],huh:15,hypothesi:15,i:[1,2,3,4,6,9,10,16],id2label:8,id:[1,2,4,6,10],ident:[2,15],identifi:[1,6,10],ignor:1,ii:[2,3],iii:2,imag:14,imagin:2,imdb:2,implement:[0,1,4,6,7,8,10,11,14],improv:[2,10],includ:[1,11,12],incorpor:10,incorporate_text_exampl:6,index:[0,1,2,16],indic:[1,3,6,7,11,15],infer:[0,11],inform:15,inherit:[1,2,4,10],init:10,init_using_split:[10,11],initi:[1,6,15],inject:7,inner:1,input:[0,1,6,7,12,15],input_id:[1,7],input_length:1,inputexampl:[1,2,4,6,7,8,12],inputfeatur:[1,6,7,10],inputs_emb:7,insid:[1,6,7],insight:15,instal:0,instanti:[1,6],instead:1,instrument:2,integ:[1,6],integr:[1,8],intellect:12,interact:12,interfac:1,introduc:[1,11,15],introduct:0,invalid_label_word:4,is_invalid:4,island:2,iter:10,its:2,join:2,jointli:[4,10],journal:0,json:[1,6,10,16],jsonal:[1,6,10],jsonl:[1,6,10,16],jump:2,just:11,keep:[1,6,8,10],kei:[11,15,16],keyword:1,kindli:0,king:2,know:[1,6,7,10],knowledeagbl:10,knowledg:0,knowledgeableverb:10,kwarg:[1,4,6,10],label:[1,2,3,4,6,10,12],label_buff:10,label_logit:10,label_s:10,label_word:[1,4,6,10,11,12,16],label_word_num_per_class:[4,10,11],label_words_id:10,label_words_logit:[1,6,10],label_words_prob:10,labels_buff:10,labels_path:2,labl:1,labrl:4,lambda:15,land:2,languag:[0,1,4,6,7,8,11,12,14,15],lanuag:[1,6],larg:[2,16],largest:2,last:[2,11],later:10,latest:[0,14],law:[2,16],layer:[1,6,7],layernorm:11,lead:10,leanr:[11,15],learn:[0,1,2,3,7,10,12,15],learner:[2,4,8],learning_set:11,left:1,len:2,length:[1,4,6,7],length_limit:4,less:10,let:[14,15],letsi:2,level:[10,11,15],librari:[0,2,14,16],like:[1,6,10,11,12,16],likelihood:10,limit:4,line:[1,6,10,16],link:1,list:[1,2,3,4,6,7,8,9,10,16],liu:0,livingth:2,llr:[10,11],lm:[0,4,12],lmbff_dataset:2,lmbffclassificationrunn:8,load:[0,1,2,6,10,14],load_plm:12,load_state_dict:1,loader:1,local:[1,6,10],local_rank:11,locat:[2,16],log:[10,11],logic:10,logit:[1,6,9,10],logot:10,look:12,loss:[1,6,8,11],loss_funct:[8,11],loss_id:[1,6,7],lotclass:2,low:10,lower:2,lr:11,lrb:2,lstm:7,made:12,mai:[1,4,6,7,10,11,12],maintain:13,make:[1,2,4,8,15],manual:[0,1,2,6,8,16],manual_templ:11,manual_verb:11,manualtempl:[1,7,12],manualverb:[1,10,12,16],maosong:0,map:[1,10],mapping_hook:7,market:[2,16],mask:[1,6,7,10,11,12,15],mask_num:9,mask_token:[1,6,7,11],match:[1,6,10],mathbf:10,matter:1,max:[1,6],max_length:4,max_seq_length:[1,6,11],max_token_split:10,maximnum:10,maximum:[1,4],mayb:1,mean:[1,6,10,11],meaning:[1,6],media:2,medic:2,member:2,member_of:2,messag:2,meta:[1,2,6,15],method:[1,2,4,6,11],metric:11,micro:11,mid_dim:7,middl:10,might:[1,6],militaryconflict:2,miniconda:14,miss:10,mlm:12,mlp:[7,15],mode:1,model:[0,1,2,4,6,7,8,9,10,11,12,14,15],model_config:12,model_kwarg:1,model_nam:11,model_path:11,modeling_roberta:4,modeling_t5:4,modeling_util:[4,7],modeloutput:[1,6],modifi:[0,2,7,12],modul:[0,1,6,7,10,12,15],modular:12,mogul:2,monarch:2,more:[1,10,12],moreov:[1,6],most:[1,2,6,7,10,12,15],mountain:2,movi:2,much:10,multi:[1,2,4,6,10],multi_token_handl:[10,11],multipl:[1,6,10,12,16],music:2,must:[1,4,6],n:2,naiv:12,name:[1,2,6,10,11,16],natur:2,neccessari:12,necessari:11,need:[1,6,7,8,10,15,16],neg:[2,12],ner:2,nerd:2,nessessori:10,nest:16,neutral:2,newal:2,newspap:2,next:[1,11],ning:[0,2],nlp:[0,12],nn:[1,6,7],no_decai:11,no_rel:2,node:[1,6],nomin:2,none:[1,2,3,4,6,7,8,10,15],normal:[1,6,7,10],note:[1,6,12,15],notimplementederror:[1,6],now:[11,12,14],num_cadid:11,num_candid:10,num_class:[1,6,10,11],num_epoch:11,num_examples_per_label:[3,11],num_examples_per_label_dev:[3,11],num_examples_tot:3,num_examples_total_dev:3,num_gpu:11,num_label_words_per_class:10,num_mask:10,num_mask_token:1,num_search:[10,11],num_token:[7,11],num_warmup_step:11,number:[2,3,4,10,11,16],number_of_employe:2,obj:1,object:[1,6,7,8,10],octob:2,off:1,omit:15,on_label_words_set:[1,6,10],on_text_set:[1,6,7],one2one_verb:11,one2oneverb:10,one:[1,2,4,6,7,9,10,12,15,16],onli:[1,2,6,9,10,12,15],open:0,openprompt:[1,2,4,7,8,9,10,11,12,13,14,15],optim:[7,10,11,15],optimize_to_initi:10,optimz:15,option:[1,2,3,4,6,7,8,10],optionla:8,order:15,ordinari:10,org:[2,4,10],organ:2,orgin:[1,6,7,10,15],origin:[1,2,4,6,7,10,12,15],origini:[1,6],os:2,other:[0,1,2,6,7,8,11,12,14,15],other_famili:2,ouput:[1,6],our:[0,8,12,14,15],out:[10,15],output:[1,6,7],output_sequ:1,over:[1,2,3,6,10],overview:0,own:11,p:[7,10],packag:14,page:[1,13],paint:2,pair:2,paper:[0,2,8,9,10],paradigm:0,parallel:[1,7],param:4,paramet:[1,2,3,4,6,7,8,9,10,11],parent:[1,2,11],parent_config:11,park:2,parliament:2,pars:7,parse_text:6,part:[1,4,6,11,15],part_id:4,particular:1,pass:[1,8,10],past:1,past_key_valu:[1,7],path:[1,2,6,10,11],pdf:[4,10],pension:2,per:[2,3,4,10],perform:[8,10],person:[2,16],phrase:7,pilot:2,pipelin:[0,12],pipeline_bas:[8,9],place:[1,6,7],placehold:[1,6,12],placeholder_map:[1,6,7,11],plai:[0,8],pleas:[0,7,10,12,14,15],plm:[0,1,6,7,10],plm_config:7,plm_eval_mod:1,point:10,polit:[2,16],politicalparti:2,politician:2,pop:3,posit:[1,2,6,7,12,15],post:[1,4,6,10],post_log_softmax:10,post_process:[1,4,15],post_processing_output:[1,6],potenti:[11,12],pre:[0,1,2,4,6,7,8,10,11,12,14],predefin:[1,6,10],predict:[1,6,7,10,12,15],predict_eos_token:[1,11],prefix:[0,10,11],prefix_dropout:[7,11],prefix_tuning_templ:11,prefixtempl:1,prefixtuningtempl:7,premis:15,prepar:[1,10],prepare_inputs_for_gener:1,prepare_model_input:1,preprint:0,pretrain:[1,4],pretrain_model:1,pretrainedconfig:7,pretrainedmodel:[1,4,7],pretrainedtoken:[1,4,6,7,10],prevent:[1,4,6],previou:10,prior:10,prob:[1,6,10],probabl:[1,4,6,10],probil:10,probs_buff:10,procedur:[1,6,7],process:[1,4,6,7,8,10,11,12],process_batch:[1,6,7],process_logit:10,process_output:[1,6],processed_word:4,processor:[0,8,12],produc:[1,2,6,10],product:2,project:[1,6,10,12],prompt:[0,3,7,10,12,15],prompt_bas:[1,4,8],prompt_encoder_typ:7,prompt_model:9,promptdataload:[1,8,9,12],promptforclassif:[1,8,9,12],promptforgener:[1,8],promptmodel:1,prompttempl:12,promptverb:12,properti:[1,4,6,7],propos:2,protest:2,provid:[0,2,4,11,16],ptr:0,ptrtemplat:7,ptrverbal:10,ptune:0,ptuningtempl:7,punctuat:15,pure:10,py:[11,14],python:[11,14,15],pytorch:[0,1,6,12,14],q_:10,question:13,quick:12,railwai:[2,16],rais:[1,6],random:[3,10,11],randomli:15,rang:[1,6],rate:[7,10,11],rather:[1,6],ratio:10,raw:1,re:[1,2,4,6,10],reach:10,read:[1,6],realiz:4,receiv:[1,6],recognit:2,recommend:[1,6,10,14,16],recurs:[1,2,6],refer:12,referenc:[1,6,7],reference_id:1,regard:[1,6,10,11],region:2,regist:[1,6,10],register_buff:10,register_calibrate_logit:[1,6,10],registered_inputflag_nam:[1,6],relat:[0,1,11],relation_classif:11,relation_classification_dataset:2,relationclassif:2,releas:2,religion:2,religious_affili:2,rememb:12,remov:[1,6],replac:12,repositori:14,repres:[1,2,6,7],reproduct:11,requir:4,resign:2,respect:4,restaur:2,restrict:10,result:10,retacr:2,retail:16,retriev:[1,6],review:2,revisit:2,revist:2,rewrit:[1,6],rightarrow:[1,6],road:[2,16],roberta:[4,10,12],robertaformaskedlm:4,robertatoken:4,robertaverbalizergener:0,root:[11,14],rrb:2,rstrip:15,rule:[7,10],run:[8,11],runner:0,s:[1,2,6,7,8,10,11,12,14,15,16],safe_on_label_words_set:6,safe_on_text_set:[1,6],sai:2,same:[1,6,7,10,12,15],sampl:[1,3,4,6,7],sample_per_label:3,sample_tot:3,sampler:0,sampling_from_train:11,satisfi:10,save:[1,6,11],scale:2,scenario:3,schedul:11,scholar:[2,16],schools_attend:2,scienc:16,scientist:16,score:10,score_fct:[10,11],scratch:1,scrath:1,search:[4,10],search_id:10,second:15,section:10,see:[1,2,8,9],seed:11,seen:[1,6,10],select:[1,3,6,10,11],self:[1,6,7,8,10],semant:2,semev:2,sensit:10,sentenc:[1,2,6,7,12,15],sentiment:[1,2,6,12,15],separ:[4,10,15],seper:[1,2,6,10,16],seq2seq:12,seq_len:[1,6],sequenc:[1,2,6,7,10,12],serv:[1,2,6,10],set:[1,2,6,7,8,10,12,15,16],setup:[11,14],shape:[1,6,9,10],share:15,sharehold:2,shengd:0,shift:1,shift_input_id:1,shift_logit:1,shift_logits_and_label:1,ship:2,shortcom:2,shorten:[1,6,7,15],shortenable_id:[1,6],shot:[2,3,4,8,10,11],should:[1,2,4,6,7,10,15],showorgan:2,shuffl:[1,11],shuffle_data:11,sibl:2,significantli:10,similarli:2,simpl:[1,8,15],simpli:[4,12],simplic:[8,12],sinc:[1,6,7,10],singl:[1,6,7,10,16],situat:[1,6],size:[3,11],skyfox:2,slightli:10,slot:2,small:10,snap:2,snli:2,soft:[1,6,7],soft_id:15,soft_token:7,soft_token_id:[1,6],softmax:[1,6,10],softtempl:[1,6],softwar:2,soldier:2,some:[1,6,11,12,15],someth:[1,6,7,10],sometim:[1,6],somewhat:2,soon:7,sourc:[0,1,2,3,4,6,7,8,9,10],space:10,special:[1,6,7,8],specif:[1,4,15],specifi:[4,11,15,16],split:2,sport:[2,16],sportsev:2,sportsfacil:2,sportsleagu:2,sportsman:16,sportsteam:2,spous:2,sst:2,stage:2,stand:4,standard:[0,4],stanford:2,start:[4,12,14],state:15,state_dict:1,stateorprovince_of_birth:2,stateorprovince_of_branch:2,stateorprovince_of_death:2,stateorprovince_of_headquart:2,stateorprovinces_of_resid:2,step:[1,10,11],stir:2,stoica:2,stop:10,store:10,str:[1,2,4,6,7,8,10],strategi:[1,3,4,6,7,10],stricken:2,strictli:10,string:[10,15],strip:15,stronger:1,sub:[1,6],subsequ:[1,6,7],subset:11,subsidiari:2,substitut:[1,6],suggest:[1,6,11],sum:[1,6,10],sun:0,supervis:2,support:[0,1,6,7,10,12,14,15,16],system:[2,14],t5:[1,4,7,12],t5forconditionalgener:4,t5templategener:0,t5token:4,t:[1,2,6,10],tac:2,tacr:2,tacrev:2,tail:[1,2,11],take:[10,15],talk:2,tao:0,target:[1,15],target_numb:4,task:[0,1,2,7,8,10],teach:11,teacher_forc:[1,11],tech:[2,16],technolog:16,tempalt:11,templat:[0,1,4,6,8,9,10,11],template_gener:4,template_text:4,templategener:4,tensor:[1,6,9,10],tensorboard:11,terribl:16,test:[2,8,11,12,14],test_dataload:8,test_dataset:[2,8],texa:2,text:[0,1,4,6,7,10,11,12,15],text_a:[1,2,6,7,11,12],text_b:[1,2,6,7,11],text_classification_dataset:2,text_list:4,textclassif:2,textual:[0,1,6,7,10],tgt_text:2,th:[1,6],thaban:2,than:[1,6,10],theater:2,thei:[1,2,15],them:[12,15],therefor:[1,6,10],thi:[1,2,3,4,6,7,8,10,11,12,13,15,16],think:12,thorough:2,though:8,three:[1,6,10,12],through:1,thu:10,thunlp:14,time:[1,12],titl:[0,2,15],todo:[1,2],togeth:[2,10],token:[1,4,6,7,10,12,14,15],token_id:4,tokenization_roberta:4,tokenization_t5:4,tokenization_util:[1,4,6,7,10],tokenizer_wrapp:4,tokenizer_wrapper_class:[1,12],tokenizerwrapp:[1,4],tom:2,too:[7,15],top:[1,2,6],top_memb:2,topic:[2,15],torch:[1,6,7,9,10],total:[3,4],touch:7,trade:16,tradit:2,traffic:16,traiend:1,train:[0,1,2,4,6,7,8,10,11,14],train_dataload:8,train_dataset:[2,8],trainabl:[1,6],trainer:0,trainvalid_dataset:2,transform:[0,1,4,6,7,8,10,14],transit:[2,16],transport:2,treebank:2,trick:8,tricycl:2,trigger:[1,6],trucat:[1,6],truncat:[1,15],truncate_method:[1,11],tune:[7,10],turn:1,turner:2,tutori:[12,15],two:[4,12,15],txt:[1,2,6,10,16],type:[0,1,3,4,6,7,10,11,15],typic:1,typing_dataset:2,unbalanc:10,under:2,understand:7,unifi:11,uniformli:4,union:[1,2,6,7,10],unlabel:2,unset:11,up:[3,11,15],upon:0,us:[0,1,2,3,4,6,7,8,10,11,12,15,16],user:[8,11,14],using_decoder_past_key_valu:7,using_encoder_past_key_valu:7,util:[0,1,2,4,6,7,8,10],val:8,valid:[4,8,11],valid_dataload:8,valid_dataset:[2,8],valu:[1,6,7,10,11,15],variant:2,variou:[12,16],vector:[1,6],verbal:[0,1,4,6,8,11],verbaliez:[1,6],verbalizer_gener:4,verbalizer_lr:10,verbalizergener:4,verbalz:10,veri:10,version:[2,12,14],via:8,virtual:9,visibl:11,vocab:[1,6,10],vocab_s:[1,6,10],vocabs:9,vocabulari:[1,4,6,7,9,10],vs:2,wa:[1,2,6,7,12,15],wai:2,want:[1,4,6,11,12,15,16],war:2,warm:11,warn:3,warp:1,we:[0,1,2,6,7,8,10,11,12,14,15,16],weapon:2,webnlg_2017:2,websit:2,weight:[1,6,10,11],weight_decai:11,weilin:0,were:[1,6,10],what:[1,6,7,12],when:[1,6,7,10,16],where:[12,15],whether:[1,3,4,6,7,10],which:[0,1,4,6,7,10,11,12,15,16],whole:[1,2,3,6,10],wide:2,width:4,wikipedia:2,without:[7,8],wonder:[1,6,12],word:[1,4,6,9,10,12],work:7,worker:2,world:[2,16],wrap:[1,6,7,10],wrap_one_exampl:[1,6,7],wrape:1,wrapper:[1,4,6],wrapperclass:12,wrapperd:1,write:[0,1,6,10,11,12],writen:16,written:15,writtenart:2,wrote:11,x:10,y:10,yac:[1,4,6,8],yaml:11,year:[0,2],yield:10,yml:8,you:[0,1,4,6,8,10,11,12,14,15,16],your:[1,6,11,12,14,15,16],yulin:0,zero:11,zero_shot:11,zhang:2,zhao:0,zheng:0,zhiyuan:0},titles:["OpenPrompt Documentation","Base Classes","Data Processors","Data Utils","Prompt Generator","torch_geometric.nn","openprompt","Templates","Trainer","Utils Functions","Verbalizer","Play with Configuration","Introduction with an Example","FAQ","Installation","How to Write a Template?","How to Write a Verbalizer?"],titleterms:{"1":12,"2":12,"3":12,"4":12,"5":12,"6":12,"7":12,"class":[1,4],"default":11,"function":9,One:10,agnewsprocessor:2,an:12,automat:10,base:[1,4],basic:2,bff:8,calibr:9,classif:[2,8],condit:2,config:11,configur:11,construct:12,content:[6,9],data:[2,3],dataload:[11,12],dbpediaprocessor:2,defin:12,document:0,entiti:2,environ:11,exampl:[3,12],faq:13,featur:3,fewnerdprocessor:2,fewshot:3,file:16,from:[14,16],gener:[2,4,8],get:0,github:14,how:[15,16],imdbprocessor:2,indic:0,infer:[2,12],input:[3,16],instal:14,introduct:12,knowledg:10,label:16,languag:2,learn:11,lm:8,load:16,manual:[7,10],mix:15,nn:5,obtain:12,openprompt:[0,6],overview:[1,4,7,10],packag:0,pipelin:[1,11],plai:11,plm:[11,12],post:15,prefix:7,process:15,processor:2,prompt:[1,4,11],prompt_bas:6,promptmodel:12,ptr:[7,10],ptune:7,refer:0,relat:2,reproduc:11,retacredprocessor:2,robertaverbalizergener:4,runner:8,sampler:3,semevalprocessor:2,set:11,snliprocessor:2,soft:15,specif:11,sst2processor:2,start:0,step:12,t5templategener:4,tabl:0,tacredprocessor:2,tacrevprocessor:2,task:[11,12],templat:[7,12,15],text:2,textual:15,torch_geometr:5,train:12,trainer:8,type:2,util:[3,9],verbal:[10,12,16],webnlgprocessor:2,word:16,write:[15,16]}})