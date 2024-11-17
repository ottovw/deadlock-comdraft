import { useForm, Controller } from 'react-hook-form'
import { CalendarIcon, Clock } from 'lucide-react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Calendar } from '@/components/ui/calendar'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { supabaseClient } from '../../supabase'
import { useNavigate } from '@tanstack/react-router'

type FormData = {
  name: string
  description: string
  // date: Date | undefined
  // time: string
  // timezone: string
}

import { customAlphabet } from 'nanoid'
const nanoid = customAlphabet('1234567890abcdef', 10)

export function CreateDraftForm() {
  const navigate = useNavigate()

  const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    defaultValues: {
      name: '',
      description: '',
      // date: undefined,
      // time: '',
      // timezone: '',
    },
  })

  const onSubmit = async (data: FormData) => {
    const id = nanoid()
    const result = await supabaseClient.from('drafts').insert([
      {
        id,
        name: data.name,
        description: data.description,
        // date: data.date,
        // time: data.time,
        // timezone: data.timezone,
      }
    ])
    navigate({ to: `/drafts/${id}` });
    reset()
  }

  return (
    <Card className="w-full max-w-md">
      <CardHeader>
        <CardTitle>Create New Deadlock Draft</CardTitle>
      </CardHeader>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Controller
              name="name"
              control={control}
              rules={{ required: 'Name is required' }}
              render={({ field }) => (
                <Input
                  id="name"
                  placeholder="Enter draft name"
                  {...field}
                  aria-invalid={errors.name ? 'true' : 'false'}
                />
              )}
            />
            {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description (optional)</Label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <Textarea
                  id="description"
                  placeholder="Enter draft description"
                  {...field}
                />
              )}
            />
          </div>
          {/* <div className="space-y-2">
            <Label>Date</Label>
            <Controller
              name="date"
              control={control}
              rules={{ required: 'Date is required' }}
              render={({ field }) => (
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal ${!field.value && 'text-muted-foreground'}`}
                      aria-invalid={errors.date ? 'true' : 'false'}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {field.value ? field.value.toDateString() : <span>Pick a date</span>}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              )}
            />
            {errors.date && <p className="text-sm text-red-500">{errors.date.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <div className="flex items-center">
              <Controller
                name="time"
                control={control}
                rules={{ required: 'Time is required' }}
                render={({ field }) => (
                  <Input
                    id="time"
                    type="time"
                    {...field}
                    aria-invalid={errors.time ? 'true' : 'false'}
                  />
                )}
              />
            </div>
            {errors.time && <p className="text-sm text-red-500">{errors.time.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="timezone">Timezone</Label>
            <Controller
              name="timezone"
              control={control}
              rules={{ required: 'Timezone is required' }}
              render={({ field }) => (
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger id="timezone" aria-invalid={errors.timezone ? 'true' : 'false'}>
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UTC">UTC</SelectItem>
                    <SelectItem value="EST">EST</SelectItem>
                    <SelectItem value="CST">CST</SelectItem>
                    <SelectItem value="MST">MST</SelectItem>
                    <SelectItem value="PST">PST</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.timezone && <p className="text-sm text-red-500">{errors.timezone.message}</p>} */}
          {/* </div> */}
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">Create Draft</Button>
        </CardFooter>
      </form>
    </Card>
  )
}